#!/bin/bash
# version 1.3.0

# include lib functions
source "$(dirname ${BASH_SOURCE[0]})/lib.sh"


# Incerment Build number.
increment_build_number() {
  # check requerments
  check_ci_variables "CI_SERVER_URL" "CI_PROJECT_ID" "CI_API_TOKEN"

  # Build Number is empty.
  if [[ -z "${BUILD_NUMBER}" ]]; then
    # Read variable from CI Variables.
    local RESPONSE

    # Without environment.
    if [[ -z "${CI_ENVIRONMENT_NAME}" ]]; then
      RESPONSE=$(curl -sg -H PRIVATE-TOKEN:${CI_API_TOKEN} "${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/variables/BUILD_NUMBER")

    # With environment scope filter.
    else
      RESPONSE=$(curl -sg -H PRIVATE-TOKEN:${CI_API_TOKEN} "${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/variables/BUILD_NUMBER?filter[environment_scope]=${CI_ENVIRONMENT_NAME}")
    fi

    if [[ "$?" -ne 0 ]]; then
      error "Failed read Gitlab CI Variable 'BUILD_NUMBER'!"
    fi

    # Variable not defined.
    if [[ "$(jq -r '.message' <<< ${RESPONSE})" == "404 Variable Not Found" ]]; then
      # Init value.
      BUILD_NUMBER=1

      # Create new Gitlab CI Variable.
      # Without environment.
      if [[ -z "${CI_ENVIRONMENT_NAME}" ]]; then
        RESPONSE=$(curl -sg -H PRIVATE-TOKEN:${CI_API_TOKEN} "${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/variables" -X POST -F "key=BUILD_NUMBER" -F "value=${BUILD_NUMBER}")

      # With environment scope filter.
      else
        RESPONSE=$(curl -sg -H PRIVATE-TOKEN:${CI_API_TOKEN} "${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/variables" -X POST -F "key=BUILD_NUMBER" -F "value=${BUILD_NUMBER}" -F "environment_scope=${CI_ENVIRONMENT_NAME}")
      fi

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

    # Without environment.
    if [[ -z "${CI_ENVIRONMENT_NAME}" ]]; then
      RESPONSE=$(curl -sg -H PRIVATE-TOKEN:${CI_API_TOKEN} "${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/variables/BUILD_NUMBER" -X PUT -F "value=${BUILD_NUMBER}")

    # With environment scope filter.
    else
      RESPONSE=$(curl -sg -H PRIVATE-TOKEN:${CI_API_TOKEN} "${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/variables/BUILD_NUMBER?filter[environment_scope]=${CI_ENVIRONMENT_NAME}" -X PUT -F "value=${BUILD_NUMBER}")
    fi


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


# create environment file with version from build number
create_build_number_version_env() {
  # check requerments
  check_ci_variables "CI_COMMIT_BRANCH" "CI_COMMIT_SHORT_SHA"

  # increment build number
  if ! increment_build_number; then
    error "Cannot increment build number!"
  fi

  local VERSION

  if [[ "${CI_COMMIT_BRANCH}" == "release" || "${CI_COMMIT_BRANCH}" =~ ^release/ ]]; then
    # generate string "BUILD_NUMBER-COMMIT"
    VERSION="${BUILD_NUMBER}-${CI_COMMIT_SHORT_SHA}"
  else
    # generate string "BRANCH-BUILD_NUMBER-COMMIT"
    VERSION="${CI_COMMIT_BRANCH##*/}-${BUILD_NUMBER}-${CI_COMMIT_SHORT_SHA}"
  fi

  # create environment file
  cat > variables.env <<EOF
    VERSION=${VERSION}
EOF
}


# create environment file with version from tag
create_tag_version_env() {
  # check requerments
  check_ci_variables "CI_COMMIT_TAG"

  # create environment file
  cat > variables.env <<EOF
    VERSION=${CI_COMMIT_TAG}
EOF
}


# create environment file from Git Version
create_gitversion_env() {
  # check requerments
  check_ci_variables "CI_REPOSITORY_URL" "CI_JOB_TOKEN" "CI_COMMIT_REF_NAME" "CI_COMMIT_SHA" "CI_PROJECT_DIR"

  # run Git Version
  local JSON
  JSON=$(/tools/dotnet-gitversion /url "${CI_REPOSITORY_URL}" /u gitlab-ci-token /p ${CI_JOB_TOKEN} /b ${CI_COMMIT_REF_NAME} /c ${CI_COMMIT_SHA} /dynamicRepoLocation "${CI_PROJECT_DIR}")

  if [[ "$?" -ne 0 ]]; then
    error "GitVersion failed generate version json!"
  fi

  # create environment file
  cat > variables.env <<EOF
    VERSION=$(jq -r '.MajorMinorPatch' <<< ${JSON})
EOF
}
