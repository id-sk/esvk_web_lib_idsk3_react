#!/bin/bash
# version 1.5.0

REQUIRED_SET_SSH=true


# error output
error() {
  echo -e "\033[0;31mERROR: $1\033[0m" >&2

  exit 1
}


# check if the Gitlab CI variables are defined
check_ci_variables() {
  # arguments is not empty
  if [[ "$#" -gt 0 ]]; then
    local OUTPUT=""

    # check if variables are defined
    for VARIABLE in "$@"; do
      if [[ -z "${!VARIABLE}" ]]; then
        if [[ -z "${OUTPUT}" ]]; then
          OUTPUT="'${VARIABLE}'"

        else
          OUTPUT="${OUTPUT}, '${VARIABLE}'"
        fi
      fi
    done

    if [[ -n "${OUTPUT}" ]]; then  
      error "Gitlab CI Variables not defined: ${OUTPUT}!"
    fi

  else
    error "Arguments is empty!"
  fi
}


# replace CI variables in file on runner (file is temporary)
replace_ci_variables() {
  # check requerments
  check_ci_variables "CI_ENVIRONMENT_NAME"

  local FILE_PATH="$1"

  if [[ -z "${FILE_PATH}" ]]; then
    error "Empty required input arguments: 'FILE_PATH'!"
  fi

  if [[ ! -f "${FILE_PATH}" ]]; then
    error "File '${FILE_PATH}' not found in Gitlab Project!"
  fi

  local CI_ENVIRONMENT_NAME_LOWER=`echo "${CI_ENVIRONMENT_NAME,,}"`

  # process Gitlab CI variables for file
  for GITLAB_VARIABLE in "CI_ENVIRONMENT_NAME" "CI_ENVIRONMENT_NAME_LOWER"; do
    sed -ie "s#\${${GITLAB_VARIABLE}}#${!GITLAB_VARIABLE}#g" "${FILE_PATH}"
  done
}


# replace variables in file on runner (file is temporary)
replace_variables() {
  local FILE_PATH="$1"

  if [[ -z "${FILE_PATH}" ]]; then
    error "Empty required input arguments: 'FILE_PATH'!"
  fi

  if [[ ! -f "${FILE_PATH}" ]]; then
    error "File '${FILE_PATH}' not found in Gitlab Project!"
  fi

  # process Gitlab CI variables for file
  for GITLAB_VARIABLE in `printenv | awk -F "=" '/^DC_/ {print $1}'`; do
    # only variable with value
    if [[ ! -f "${!GITLAB_VARIABLE}" ]]; then
      sed -ie "s#\${${GITLAB_VARIABLE}}#${!GITLAB_VARIABLE}#" "${FILE_PATH}"
    fi
  done
}


# setting SSH requirements
set_ssh() {
  if [[ -z "${SSH_CONNECT}" ]]; then
    error "SSH connection is not defined in variable 'SSH_CONNECT'!"
  fi

  # if global SSH Key not set
  if [[ -z "${SSH_KEY}" || ! -f "${SSH_KEY}" ]]; then
    if [[ -z "${SSH_KEY_NAME}" || ! -f "${!SSH_KEY_NAME}" ]]; then
      error "Failed to find ssh identifies key file from Gitlab variable 'SSH_KEY_NAME'!"

    else
      SSH_KEY="${!SSH_KEY_NAME}"
    fi

  elif [[ ! -f "${SSH_KEY}" ]]; then
    error "Failed to find ssh identifies key file from Gitlab variable 'SSH_KEY'!"
  fi

  # set required permissions
  chmod 0600 "${SSH_KEY}"

  REQUIRED_SET_SSH=false
}


# SSH Run remote command
ssh_run_command() {
  if ${REQUIRED_SET_SSH}; then
    error "SSH settings is not inicialized! Run beafor 'set_ssh'!"
  fi

  if [[ "$#" -eq 0 ]]; then
    error "Empty required input arguments: 'COMMAND'!"
  fi

  # run remote command
  if ! ssh -q -i "${SSH_KEY}" -o "StrictHostKeyChecking=no" -o "IdentitiesOnly=yes" "${SSH_CONNECT}" "$@"; then
    error "Remote command exited with error: '$@'!"
  fi
}


# get docker image tag configuration
get_docker_image_tag() {
  # defined version
  if [[ -n "${VERSION}" ]]; then
    # add IMAGE_TAG_SUFFIX
    if [[ -n "${IMAGE_TAG_SUFFIX}" ]]; then
      echo "${VERSION}-${IMAGE_TAG_SUFFIX}"

    else
      echo "${VERSION}"
    fi

  # run local
  elif [[ -z "${CI_PIPELINE_ID}" ]]; then
    local BRANCH
    BRANCH="$(git branch --show-current)"
    BRANCH=${BRANCH##*/}

    if [[ "$?" -ne "0" || -z "${BRANCH}" ]]; then
      error "Failed to read local git branch!"
    fi

    # tag not exists - only commit
    if [[ -z "$(git tag )" ]]; then
      echo "${BRANCH}-$(git rev-parse --short HEAD)"

    # tag with Number and commit
    else
      echo "${BRANCH}-$(git describe --tags)"
    fi

  # run in Gitlab CI/CD
  else
    # check requerments
    check_ci_variables "CI_COMMIT_BRANCH" "CI_COMMIT_SHORT_SHA" "BUILD_NUMBER"

    # generate string "BRANCH-BUILD_NUMBER-COMMIT-IMAGE_TAG_SUFFIX"
    if [[ -n "${IMAGE_TAG_SUFFIX}" ]]; then
      echo "${CI_COMMIT_BRANCH##*/}-${BUILD_NUMBER}-${CI_COMMIT_SHORT_SHA}-${IMAGE_TAG_SUFFIX}"

    # generate string "BRANCH-BUILD_NUMBER-COMMIT"
    else
      echo "${CI_COMMIT_BRANCH##*/}-${BUILD_NUMBER}-${CI_COMMIT_SHORT_SHA}"
    fi
  fi
}
