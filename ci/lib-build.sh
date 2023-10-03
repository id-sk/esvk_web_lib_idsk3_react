#!/bin/bash
# version 1.3.2

# include lib functions
source "$(dirname ${BASH_SOURCE[0]})/lib.sh"


# build Docker image
docker_build_image() {
  if [[ ! -f "Dockerfile" ]]; then
    error "File 'Dockerfile' not found in Gitlab Project!"
  fi

  # run local
  if [[ -z "${CI_PIPELINE_ID}" ]]; then
    local IMAGE_NAME=$(basename `pwd`)

  # run in Gitlab CI/CD
  else
    # check requerments
    check_ci_variables "CI_REGISTRY_IMAGE"

    local IMAGE_NAME

    # generate string "CI_REGISTRY_IMAGE/IMAGE_NAME_SUFFIX"
    if [[ -n "${IMAGE_NAME_SUFFIX}" ]]; then
      IMAGE_NAME="${CI_REGISTRY_IMAGE}/${IMAGE_NAME_SUFFIX}"

    # generate string "CI_REGISTRY_IMAGE"
    else
      IMAGE_NAME="${CI_REGISTRY_IMAGE}"
    fi
  fi

  # read docker image tag
  local IMAGE_TAG
  IMAGE_TAG="$(get_docker_image_tag)"

  if [[ "$?" -ne 0 || -z "${IMAGE_TAG}" ]]; then
    error "Failed read docker image tag!" "get_docker_image_tag" "${IMAGE_TAG}"
  fi

  # build new image
  if [[ -z "$@" ]]; then
    if ! docker build -f Dockerfile -t "${IMAGE_NAME}:${IMAGE_TAG}" .; then
      error "Failed build docker container image '${IMAGE_NAME}:${IMAGE_TAG}'!"
    fi

  # with Build Arguments
  else
    # convert arguments to build arguments string
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


# push Docker image
docker_push_image() {
  # check requerments
  check_ci_variables "CI_REGISTRY" "CI_REGISTRY_USER" "CI_REGISTRY_PASSWORD" "CI_REGISTRY_IMAGE"

  local IMAGE_CUSTOM_TAG="$1"

  # login to docker registry
  if ! docker login -u "${CI_REGISTRY_USER}" -p "${CI_REGISTRY_PASSWORD}" "${CI_REGISTRY}"; then
    error "Failed login to docker registry!"
  fi

  # local IMAGE_NAME="${CI_REGISTRY_IMAGE}"
  local IMAGE_NAME

  if [[ -n "${IMAGE_NAME_SUFFIX}" ]]; then
    IMAGE_NAME="${CI_REGISTRY_IMAGE}/${IMAGE_NAME_SUFFIX}"

  else
    IMAGE_NAME="${CI_REGISTRY_IMAGE}"
  fi

  # read docker image tag
  local IMAGE_TAG="$(get_docker_image_tag)"

  if [[ "$?" -ne 0 || -z "${IMAGE_TAG}" ]]; then
    error "Failed read docker image tag!" "get_docker_image_tag" "${IMAGE_TAG}"
  fi

  # push new image
  if ! docker push "${IMAGE_NAME}:${IMAGE_TAG}"; then
    error "Failed push docker container image '${IMAGE_NAME}:${IMAGE_TAG}'!"
  fi

  # custom tag
  if [[ -n "${IMAGE_CUSTOM_TAG}" ]]; then
    if ! docker tag "${IMAGE_NAME}:${IMAGE_TAG}" "${IMAGE_NAME}:${IMAGE_CUSTOM_TAG}"; then
      error "Failed create custom '${IMAGE_CUSTOM_TAG}' tag docker container image!"
    fi

    if ! docker push "${IMAGE_NAME}:${IMAGE_CUSTOM_TAG}"; then
      error "Failed push docker container image '${IMAGE_NAME}:${IMAGE_CUSTOM_TAG}'!"
    fi
  fi

  # tag "latest"
  if [[ -n "${CI_COMMIT_BRANCH}" && "${CI_COMMIT_BRANCH}" == "${CI_DEFAULT_BRANCH}" ]]; then
    if ! docker tag "${IMAGE_NAME}:${IMAGE_TAG}" "${IMAGE_NAME}:latest"; then
      error "Failed create 'latest' tag docker container image!"
    fi

    if ! docker push "${IMAGE_NAME}:latest"; then
      error "Failed push docker container image '${IMAGE_NAME}:latest'!"
    fi
  fi
}
