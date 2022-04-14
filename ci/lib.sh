#!/bin/bash
# version 1.1.4

REQUIRED_SET_SSH=true


# Error output.
error() {
  echo -e "\033[0;31mERROR: $1\033[0m" >&2

  exit 1
}


# Setting SSH requirements.
set_ssh() {
  if [[ -z "${SSH_CONNECT}" ]]; then
    error "SSH connection is not defined in variable 'SSH_CONNECT'!"
  fi

  # If global SSH Key not set.
  if [[ -z "${SSH_KEY}" || ! -f "${SSH_KEY}" ]]; then
    if [[ -z "${SSH_KEY_NAME}" || ! -f "${!SSH_KEY_NAME}" ]]; then
      error "Failed to find ssh identifies key file from Gitlab variable 'SSH_KEY_NAME'!"

    else
      SSH_KEY="${!SSH_KEY_NAME}"
    fi

  elif [[ ! -f "${SSH_KEY}" ]]; then
    error "Failed to find ssh identifies key file from Gitlab variable 'SSH_KEY'!"
  fi

  # Set required permissions.
  chmod 0600 "${SSH_KEY}"

  REQUIRED_SET_SSH=false
}


# SSH Run remote command.
ssh_run_command() {
  if ${REQUIRED_SET_SSH}; then
    error "SSH settings is not inicialized! Run beafor 'set_ssh'!"
  fi

  if [[ "$#" -eq 0 ]]; then
    error "Empty required input arguments: 'COMMAND'!"
  fi

  # Run remote command.
  if ! ssh -q -i "${SSH_KEY}" -o "StrictHostKeyChecking=no" -o "IdentitiesOnly=yes" "${SSH_CONNECT}" "$@"; then
    error "Remote command exited with error: '$@'!"
  fi
}


# Get Gitlab Tag.
get_gitlab_tag() {
  # Check Gitlab CI Variables.
  if [[ -z "${CI_SERVER_URL}" || -z "${CI_PROJECT_ID}"  ]]; then
    error "Gitlab CI Variables not defined: 'CI_SERVER_URL', 'CI_PROJECT_ID'!"
  fi

  if [[ -z "${CI_API_TOKEN}" ]]; then
    error "Gitlab CI variable 'CI_API_TOKEN' not set!"
  fi

  # Show last commit tag name.
  curl -sfg -H PRIVATE-TOKEN:${CI_API_TOKEN} "${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/repository/tags" | jq -r ".[0] | .name // empty"

  if [[ "$?" -ne 0 ]]; then
    error "Failed read Gitlab Repository Tags!"
  fi
}


# Generate string "BRANCH-[ TAG ]-BUILD_NUMBER-COMMIT".
get_docker_image_tag() {
  # Run local.
  if [[ -z "${CI_PIPELINE_ID}" ]]; then
    local BRANCH
    BRANCH="$(git branch --show-current)"
    BRANCH=${BRANCH##*/}

    if [[ "$?" -ne "0" || -z "${BRANCH}" ]]; then
      error "Failed to read local git branch!"
    fi

    # Tag not exists - only commit.
    if [[ -z "$(git tag )" ]]; then
      echo "${BRANCH}-$(git rev-parse --short HEAD)"

    # Tag with Number and commit.
    else
      echo "${BRANCH}-$(git describe --tags)"
    fi

  # Run in Gitlab CI/CD.
  else
    # Check Gitlab CI Variables.
    if [[ -z "${CI_COMMIT_BRANCH}" || -z "${CI_COMMIT_SHORT_SHA}" || -z "${BUILD_NUMBER}" ]]; then
      error "Gitlab CI Variables not defined: 'CI_COMMIT_BRANCH', 'CI_COMMIT_SHORT_SHA', 'BUILD_NUMBER'!"
    fi

    local IMAGE_TAG="${CI_COMMIT_BRANCH}"
    IMAGE_TAG=${IMAGE_TAG##*/}

    # Gitlab Repository Tags.
    # local GIT_TAG
    # GIT_TAG="$(get_gitlab_tag)"
    #
    # if [[ "$?" -ne 0 ]]; then
    #   error "Failed read git tag!" "get_gitlab_tag" "${GIT_TAG}"
    # fi
    #
    # if [[ ! -z "$GIT_TAG" ]]; then
    #   IMAGE_TAG="${IMAGE_TAG}-${GIT_TAG}"
    # fi

    echo "${IMAGE_TAG}-${BUILD_NUMBER}-${CI_COMMIT_SHORT_SHA}"
  fi
}
