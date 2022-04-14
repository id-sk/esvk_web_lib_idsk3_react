#!/bin/bash
# version 1.1.2

# include lib functions
source "$(dirname ${BASH_SOURCE[0]})/lib.sh"


# Incerment Build number.
increment_build_number() {
  # Check Gitlab CI Variables.
  if [[ -z "${CI_SERVER_URL}" || -z "${CI_PROJECT_ID}" ]]; then
    error "Gitlab CI Variables not defined: 'CI_SERVER_URL', 'CI_PROJECT_ID'!"
  fi

  if [[ -z "${CI_API_TOKEN}" ]]; then
    error "Gitlab CI variable 'CI_API_TOKEN' not set!"
  fi

  if [[ -z "${CI_ENVIRONMENT_NAME}" ]]; then
    error "Gitlab CI job parameter 'environment' not set!"
  fi

  # Build Number is empty.
  if [[ -z "${BUILD_NUMBER}" ]]; then
    # Read variable from CI Variables.
    local RESPONSE
    RESPONSE=$(curl -sg -H PRIVATE-TOKEN:${CI_API_TOKEN} "${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/variables/BUILD_NUMBER?filter[environment_scope]=${CI_ENVIRONMENT_NAME}")

    if [[ "$?" -ne 0 ]]; then
      error "Failed read Gitlab CI Variable 'BUILD_NUMBER'!"
    fi

    # Variable not defined.
    if [[ "$(jq -r '.message' <<< ${RESPONSE})" == "404 Variable Not Found" ]]; then
      # Init value.
      BUILD_NUMBER=1

      # Create new Gitlab CI Variable.
      RESPONSE=$(curl -sg -H PRIVATE-TOKEN:${CI_API_TOKEN} "${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/variables" -X POST -F "key=BUILD_NUMBER" -F "value=${BUILD_NUMBER}" -F "environment_scope=${CI_ENVIRONMENT_NAME}")

      if [[ "$?" -ne 0 || "${BUILD_NUMBER}" != "$(jq -r '.value' <<< ${RESPONSE})" ]]; then
        error "Failed to create Gitlab CI Variable 'BUILD_NUMBER'!"
      fi

    else
      error "Error calling Gitlab API Variable 'BUILD_NUMBER'!"
    fi

  # Increment value.
  else
    if ! BUILD_NUMBER=$((${BUILD_NUMBER} + 1)); then
      error "Non-numeric value in Gitlab CI Variable 'BUILD_NUMBER'!"
    fi

    # Increment Gitlab CI Variable.
    local RESPONSE
    RESPONSE=$(curl -sg -H PRIVATE-TOKEN:${CI_API_TOKEN} "${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/variables/BUILD_NUMBER?filter[environment_scope]=${CI_ENVIRONMENT_NAME}" -X PUT -F "value=${BUILD_NUMBER}")

    if [[ "$?" -ne 0 ]]; then
      error "Failed increment Gitlab CI Variable 'BUILD_NUMBER'!"
    fi

    # Variable not defined on environment scope.
    if [[ "$(jq -r '.message' <<< ${RESPONSE})" == "404 Variable Not Found" ]]; then
      local RESPONSE
      RESPONSE=$(curl -sg -H PRIVATE-TOKEN:${CI_API_TOKEN} "${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/variables/BUILD_NUMBER" -X PUT -F "value=${BUILD_NUMBER}")

      if [[ "$?" -ne 0 ]]; then
        error "Failed increment Gitlab CI Variable 'BUILD_NUMBER'!"
      fi
    fi

    # Check response value.
    if [[ "$(jq -r '.value // empty' <<< ${RESPONSE})" != "${BUILD_NUMBER}" ]]; then
      error "Failed increment Gitlab CI Variable 'BUILD_NUMBER'!"
    fi
  fi
}


# Build Docker image.
docker_build_image() {
  if [[ ! -f "Dockerfile" ]]; then
    error "File 'Dockerfile' not found in Gitlab Project!"
  fi

  # Run local.
  if [[ -z "${CI_PIPELINE_ID}" ]]; then
    local IMAGE_NAME=$(basename `pwd`)

  # Run in Gitlab CI/CD.
  else
    # Check Gitlab CI Variables.
    if [[ -z "${CI_REGISTRY_IMAGE}" ]]; then
      error "Gitlab CI Variables not defined: 'CI_REGISTRY_IMAGE'!"
    fi

    local IMAGE_NAME="${CI_REGISTRY_IMAGE}"
  fi

  # Read docker image tag.
  local IMAGE_TAG
  IMAGE_TAG="$(get_docker_image_tag)"

  if [[ "$?" -ne 0 || -z "${IMAGE_TAG}" ]]; then
    error "Failed read docker image tag!" "get_docker_image_tag" "${IMAGE_TAG}"
  fi

  # Build new image.
  if [[ -z "$@" ]]; then
    if ! docker build -f Dockerfile -t "${IMAGE_NAME}:${IMAGE_TAG}" .; then
      error "Failed build docker container image '${IMAGE_NAME}:${IMAGE_TAG}'!"
    fi

  # With Build Arguments.
  else
    # Convert arguments to build arguments string.
    for ARGUMENT in "$@"; do
      if [[ -z "${BUILD_ARGUMENT}" ]]; then
        local BUILD_ARGUMENT="--build-arg ${ARGUMENT}"

      else
        local BUILD_ARGUMENT="${BUILD_ARGUMENT} --build-arg ${ARGUMENT}"
      fi
    done

    if ! docker build -f Dockerfile ${BUILD_ARGUMENT} -t "${IMAGE_NAME}:${IMAGE_TAG}" .; then
      error "Failed build docker container image '${IMAGE_NAME}:${IMAGE_TAG}' with arguments: '${BUILD_ARGUMENT}'!"
    fi
  fi
}


# Push Docker image.
docker_push_image() {
  # Check Gitlab CI Variables.
  if [[ -z "${CI_REGISTRY}" || -z "${CI_REGISTRY_USER}" || -z "${CI_REGISTRY_PASSWORD}" || -z "${CI_REGISTRY_IMAGE}" || -z "${CI_COMMIT_BRANCH}" || -z "${CI_DEFAULT_BRANCH}" ]]; then
    error "Gitlab CI Variables not defined: 'CI_REGISTRY', 'CI_REGISTRY_USER', 'CI_REGISTRY_PASSWORD', 'CI_REGISTRY_IMAGE', 'CI_COMMIT_BRANCH', 'CI_DEFAULT_BRANCH'!"
  fi

  local IMAGE_CUSTOM_TAG="$1"

  # Login to docker registry.
  if ! docker login -u "${CI_REGISTRY_USER}" -p "${CI_REGISTRY_PASSWORD}" "${CI_REGISTRY}"; then
    error "Failed login to docker registry!"
  fi

  # Read docker image tag.
  local IMAGE_TAG="$(get_docker_image_tag)"

  if [[ "$?" -ne 0 || -z "${IMAGE_TAG}" ]]; then
    error "Failed read docker image tag!" "get_docker_image_tag" "${IMAGE_TAG}"
  fi

  # Push new image.
  if ! docker push "${CI_REGISTRY_IMAGE}:${IMAGE_TAG}"; then
    error "Failed push docker container image '${CI_REGISTRY_IMAGE}:${IMAGE_TAG}'!"
  fi

  # Custom tag.
  if [[ -n "${IMAGE_CUSTOM_TAG}" ]]; then
    if ! docker tag "${CI_REGISTRY_IMAGE}:${IMAGE_TAG}" "${CI_REGISTRY_IMAGE}:${IMAGE_CUSTOM_TAG}"; then
      error "Failed create custom '${IMAGE_CUSTOM_TAG}' tag docker container image!"
    fi

    if ! docker push "${CI_REGISTRY_IMAGE}:${IMAGE_CUSTOM_TAG}"; then
      error "Failed push docker container image '${CI_REGISTRY_IMAGE}:${IMAGE_CUSTOM_TAG}'!"
    fi
  fi

  # Tag "latest".
  if [[ "${CI_COMMIT_BRANCH}" == "${CI_DEFAULT_BRANCH}" ]]; then
    if ! docker tag "${CI_REGISTRY_IMAGE}:${IMAGE_TAG}" "${CI_REGISTRY_IMAGE}:latest"; then
      error "Failed create 'latest' tag docker container image!"
    fi

    if ! docker push "${CI_REGISTRY_IMAGE}:latest"; then
      error "Failed push docker container image '${CI_REGISTRY_IMAGE}:latest'!"
    fi
  fi
}
