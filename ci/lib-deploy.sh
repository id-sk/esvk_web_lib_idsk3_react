#!/bin/bash
# version 1.4.0

# include lib functions
source "$(dirname ${BASH_SOURCE[0]})/lib.sh"


# Create remote server directory.
create_remote_directory() {
  if ${REQUIRED_SET_SSH}; then
    error "SSH settings is not inicialized! Run beafor 'set_ssh'!"
  fi

  local DIRECTORY="$1"

  if [[ -z "${DIRECTORY}" ]]; then
    error "Empty required input arguments: 'DIRECTORY'!"
  fi

  # Create directory on server.
  if ! ssh_run_command mkdir -p "${DIRECTORY}"; then
    error "Cannot create remote server directory '${SSH_CONNECT}:${DIRECTORY}'!"
  fi
}


# Copy file to server.
copy_file_to_server() {
  if ${REQUIRED_SET_SSH}; then
    error "SSH settings is not inicialized! Run beafor 'set_ssh'!"
  fi

  local LOCAL_PATH="$1"
  local SERVER_PATH="$2"

  if [[ -z "${LOCAL_PATH}" || -z "${SERVER_PATH}" ]]; then
    error "Empty required input arguments: 'LOCAL_PATH', 'SERVER_PATH'!"
  fi

  if [[ ! -f "${LOCAL_PATH}" ]]; then
    error "File '${LOCAL_PATH}' not found in Gitlab Project!"
  fi

  # Copy file to server.
  if ! scp -q -i "${SSH_KEY}" -o "StrictHostKeyChecking=no" -o "IdentitiesOnly=yes" "${LOCAL_PATH}" "${SSH_CONNECT}:${SERVER_PATH}"; then
    error "Failed to copy file '${LOCAL_PATH}' to server file '${SSH_CONNECT}:${SERVER_PATH}'!"
  fi
}


# Copy directory to server.
copy_dir_to_server() {
  if ${REQUIRED_SET_SSH}; then
    error "SSH settings is not inicialized! Run beafor 'set_ssh'!"
  fi

  local LOCAL_PATH="$1"
  local SERVER_PATH="$2"
  local FILTER="$3"

  if [[ -z "${LOCAL_PATH}" || -z "${SERVER_PATH}" ]]; then
    error "Empty required input arguments: 'LOCAL_PATH', 'SERVER_PATH'!"
  fi

  if [[ ! -d "${LOCAL_PATH}" ]]; then
    error "Direcotry '${LOCAL_PATH}' not found in Gitlab Project!"
  fi

  # Copy directory to server.
  if [[ -z "${FILTER}" ]]; then
    if ! scp -r -q -i "${SSH_KEY}" -o "StrictHostKeyChecking=no" -o "IdentitiesOnly=yes" "${LOCAL_PATH}" "${SSH_CONNECT}:${SERVER_PATH}"; then
      error "Failed to copy directory '${LOCAL_PATH}' to server path '${SSH_CONNECT}:${SERVER_PATH}'!"
    fi

  else
    if ! scp -r -q -i "${SSH_KEY}" -o "StrictHostKeyChecking=no" -o "IdentitiesOnly=yes" ${LOCAL_PATH}/${FILTER} "${SSH_CONNECT}:${SERVER_PATH}"; then
      error "Failed to copy directory '${LOCAL_PATH}/${FILTER}' to server path '${SSH_CONNECT}:${SERVER_PATH}'!"
    fi
  fi
}


# Create Docker compose file on server.
create_docker_compose() {
  # Check Gitlab CI Variables.
  if [[ -z "${CI_ENVIRONMENT_NAME}" || -z "${CI_REGISTRY_IMAGE}" ]]; then
    error "Gitlab CI Variables not defined: 'CI_ENVIRONMENT_NAME', 'CI_REGISTRY_IMAGE'!"
  fi

  local SERVER_DIR="$1"
  local DOCKER_COMPOSE_FILE="$2"

  if [[ -z "${SERVER_DIR}" || -z "${DOCKER_COMPOSE_FILE}" ]]; then
    error "Empty required input arguments: 'SERVER_DIR', 'DOCKER_COMPOSE_FILE'!"
  fi

  if [[ ! -f "$DOCKER_COMPOSE_FILE" ]]; then
    error "File '$DOCKER_COMPOSE_FILE' not found in Gitlab Project!"
  fi

  # Create directory on server.
  create_remote_directory "${SERVER_DIR}"

  local CI_ENVIRONMENT_NAME_LOWER=`echo "${CI_ENVIRONMENT_NAME}" | tr '[:upper:]' '[:lower:]'`

  # Replace default Gitlab CI Variable for docker compose file.
  for GITLAB_VARIABLE in "CI_ENVIRONMENT_NAME" "CI_ENVIRONMENT_NAME_LOWER"; do
    sed -ie "s#\${${GITLAB_VARIABLE}}#${!GITLAB_VARIABLE}#g" "${DOCKER_COMPOSE_FILE}"
  done

  # Exists Build number.
  if [[ -n "${BUILD_NUMBER}" ]]; then
    local IMAGE_NAME="${CI_REGISTRY_IMAGE}"

    # Read docker image tag if not defined.
    if [[ -z "${IMAGE_TAG}" ]]; then
      local IMAGE_TAG
      IMAGE_TAG="$(get_docker_image_tag)"

      if [[ "$?" -ne 0 || -z "${IMAGE_TAG}" ]]; then
        error "Failed read docker image tag!" "get_docker_image_tag" "${IMAGE_TAG}"
      fi
    fi

    # Replace generate Variable for docker compose file.
    for GITLAB_VARIABLE in "IMAGE_NAME" "IMAGE_TAG"; do
      sed -ie "s#\${${GITLAB_VARIABLE}}#${!GITLAB_VARIABLE}#" "${DOCKER_COMPOSE_FILE}"
    done
  fi

  # Process Gitlab CI Variable for docker compose file.
  for GITLAB_VARIABLE in `printenv | awk -F "=" '/^DC_/ {print $1}'`; do
    # File.
    if [[ -f "${!GITLAB_VARIABLE}" ]]; then
      # Clear newline from default base64.
      local JSON="$(tr -d '\n' < ${!GITLAB_VARIABLE})"
      local FILENAME="$(jq -r 'keys[0] // empty' <<< ${JSON})"

      if [[ -z "${FILENAME}" || "${FILENAME}" != "$(basename ${FILENAME})" ]]; then
        error "Could not get file name '${FILENAME}' from Gitlab CI variable '${GITLAB_VARIABLE}'!"
      fi

      # Save data to file.
      if ! jq -r ".[keys[0]] // empty" <<< ${JSON} | base64 -d > "${FILENAME}"; then
        error "Failed to decode file contents from Gitlab CI Variable '${GITLAB_VARIABLE}'!"
      fi

      # Copy created file to server.
      copy_file_to_server "${FILENAME}" "${SERVER_DIR}/${FILENAME}"

      # Replace file name from Gitlab CI Variable type file.
      sed -ie "s#\${${GITLAB_VARIABLE}}#${FILENAME}#" "${DOCKER_COMPOSE_FILE}"

    # Only variable with value.
    else
      sed -ie "s#\${${GITLAB_VARIABLE}}#${!GITLAB_VARIABLE}#" "${DOCKER_COMPOSE_FILE}"
    fi
  done
}


# Docker login.
deploy_docker_login() {
  # Check Gitlab CI Variables.
  if [[ -z "${CI_REGISTRY}" || -z "${CI_REGISTRY_USER}" || -z "${CI_REGISTRY_PASSWORD}" ]]; then
    error "Gitlab CI Variables not defined: 'CI_REGISTRY', 'CI_REGISTRY_USER', 'CI_REGISTRY_PASSWORD'!"
  fi

  # Setting SSH requirements.
  set_ssh

  # Login to docker registry.
  if ! ssh_run_command docker login -u "${CI_REGISTRY_USER}" -p "${CI_REGISTRY_PASSWORD}" "${CI_REGISTRY}"; then
    error "Failed login to docker registry!"
  fi
}


# Deploy Docker compose.
deploy_docker_compose() {
  # Check Gitlab CI Variables.
  if [[ -z "${CI_PROJECT_NAME}" ]]; then
    error "Gitlab CI Variables not defined: 'CI_PROJECT_NAME'!"
  fi

  local CONTAINER_NAME="$1"
  local DOCKER_COMPOSE_FILE="$2"

  # Set docker container name "CI_PROJECT_NAME" if not set.
  if [[ -z "${CONTAINER_NAME}" ]]; then
    local CONTAINER_NAME="${CI_PROJECT_NAME}"
  fi

  if [[ -z "${DOCKER_COMPOSE_FILE}" ]]; then
    local DOCKER_COMPOSE_FILE="docker-compose.yml"
  fi

  # Setting SSH requirements.
  set_ssh

  # Create Docker compose file.
  sed -ie "s#\${CONTAINER_NAME}#${CONTAINER_NAME}#" "${DOCKER_COMPOSE_FILE}"
  create_docker_compose "/srv/${CONTAINER_NAME}" "${DOCKER_COMPOSE_FILE}"
  copy_file_to_server "${DOCKER_COMPOSE_FILE}" "/srv/${CONTAINER_NAME}/docker-compose.yml"

  # Run Docker Compose.
  if ! ssh_run_command docker-compose -f "/srv/${CONTAINER_NAME}/docker-compose.yml" up -d; then
    error "Docker compose up failed!"
  fi

  # Prune docker images.
  if ! ssh_run_command docker image prune -af; then
    error "Docker prune images failed!"
  fi
}


# Deploy Docker Swarm.
deploy_docker_swarm() {
  # Check Gitlab CI Variables.
  if [[ -z "${CI_PROJECT_NAME}" ]]; then
    error "Gitlab CI Variables not defined: 'CI_PROJECT_NAME'!"
  fi

  local STACK_NAME="$1"

  # Set docker stack name "CI_PROJECT_NAME" if not set.
  if [[ -z "${STACK_NAME}" ]]; then
    local STACK_NAME="${CI_PROJECT_NAME}"
  fi

  # Setting SSH requirements.
  set_ssh

  # Create Docker compose file.
  create_docker_compose "/srv/${CI_PROJECT_NAME}" "docker-compose-swarm.yml"
  copy_file_to_server "docker-compose-swarm.yml" "/srv/${CI_PROJECT_NAME}/docker-compose-swarm.yml"

  # Run Docker Stack Deploy.
  if ! ssh_run_command docker stack deploy -c "/srv/${CI_PROJECT_NAME}/docker-compose-swarm.yml" --with-registry-auth "${STACK_NAME}"; then
    error "Docker stack deploy failed!"
  fi
}


# Deploy Helm Chart.
deploy_helm_chart() {
  # Check Gitlab CI Variables.
  if [[ -z "${CI_PROJECT_NAME}" || -z "${CI_ENVIRONMENT_NAME}" ]]; then
    error "Gitlab CI Variables not defined: 'CI_PROJECT_NAME', 'CI_ENVIRONMENT_NAME'!"
  fi

  local NAME="$1"

  if [[ -z "${NAME}" ]]; then
    error "Empty required input arguments: 'NAME'!"
  fi

  # Setting SSH requirements.
  set_ssh

  # Create directory on server.
  create_remote_directory "/srv/${CI_PROJECT_NAME}"

  local CI_ENVIRONMENT_NAME_LOWER=`echo "${CI_ENVIRONMENT_NAME}" | tr '[:upper:]' '[:lower:]'`

  # Replace default Gitlab CI Variable for helm values file.
  for GITLAB_VARIABLE in "CI_ENVIRONMENT_NAME" "CI_ENVIRONMENT_NAME_LOWER"; do
    sed -ie "s#\${${GITLAB_VARIABLE}}#${!GITLAB_VARIABLE}#g" "helm-values.yml"
  done

  # Process Gitlab CI Variable for helm values file.
  for GITLAB_VARIABLE in `printenv | awk -F "=" '/^DC_/ {print $1}'`; do
    # File.
    if [[ -f "${!GITLAB_VARIABLE}" ]]; then
      # Clear newline from default base64.
      local JSON="$(tr -d '\n' < ${!GITLAB_VARIABLE})"
      local FILENAME="$(jq -r 'keys[0] // empty' <<< ${JSON})"

      if [[ -z "${FILENAME}" || "${FILENAME}" != "$(basename ${FILENAME})" ]]; then
        error "Could not get file name '${FILENAME}' from Gitlab CI variable '${GITLAB_VARIABLE}'!"
      fi

      # Save data to file.
      if ! jq -r ".[keys[0]] // empty" <<< ${JSON} | base64 -d > "${FILENAME}"; then
        error "Failed to decode file contents from Gitlab CI Variable '${GITLAB_VARIABLE}'!"
      fi

      # Copy created file to server.
      copy_file_to_server "${FILENAME}" "/srv/${CI_PROJECT_NAME}/${FILENAME}"

      # Replace file name from Gitlab CI Variable type file.
      sed -ie "s#\${${GITLAB_VARIABLE}}#${FILENAME}#" "helm-values.yml"

    # Only variable with value.
    else
      sed -ie "s#\${${GITLAB_VARIABLE}}#${!GITLAB_VARIABLE}#" "helm-values.yml"
    fi
  done

  copy_file_to_server "helm-values.yml" "/srv/${CI_PROJECT_NAME}/helm-values.yml"

  # Copy heml chart to server.
  copy_dir_to_server "helm-chart" "/srv/${CI_PROJECT_NAME}/" "*"

  # Install/upgrade Helm Chart.
  if ! ssh_run_command helm upgrade --install -f "/srv/${CI_PROJECT_NAME}/helm-values.yml" "${NAME}" "/srv/${CI_PROJECT_NAME}/"; then
    error "Helm Chart install/upgrade failed!"
  fi
}


# Check if all services is running in Docker Swarm.
check_docker_swarm() {
  # Check Gitlab CI Variables.
  if [[ -z "${CI_PROJECT_NAME}" ]]; then
    error "Gitlab CI Variables not defined: 'CI_PROJECT_NAME'!"
  fi

  local COUNT="$1"
  local STACK_NAME="$2"
  local SERVICE_NAME="$3"

  # Set docker stack name "CI_PROJECT_NAME" if not set.
  if [[ -z "${STACK_NAME}" ]]; then
    local STACK_NAME="${CI_PROJECT_NAME}"
  fi

  if [[ -z "${COUNT}" ]]; then
    error "Empty required input arguments: 'COUNT'!"
  fi

  # Setting SSH requirements.
  set_ssh

  # If service name is empty - all services.
  if [[ -z "${SERVICE_NAME}" ]]; then
    for TRY in $(seq 1 ${COUNT}); do
      # Check service status of replicates.
      if ssh_run_command "docker stack services --format '{{.Name}}/{{.Replicas}}' ${STACK_NAME}" | awk -F"/" '$2 != $3 {count++; printf "%-50s\t%d/%d\n", $1, $2, $3} BEGIN { count=0 } END {exit count}'; then
        # Check update service status.
        if ssh_run_command "docker service inspect --format '{{.Spec.Name}}/{{if .UpdateStatus}}{{.UpdateStatus.State}}{{else}}completed{{end}}' \$(docker stack services --format '{{.Name}}' ${STACK_NAME})" | awk -F"/" '$2 != "completed" {count++; printf "%-50s\t%s\n", $1, $2} BEGIN { count=0 } END {exit count}'; then
          return 0
        fi
      fi

      # Next try.
      if [[ "${TRY}" -lt "${COUNT}" ]]; then
        sleep 20
      fi
    done

  # Only filtered service.
  else
    for TRY in $(seq 1 ${COUNT}); do
      # Check service status of replicates.
      if ssh_run_command "docker stack services --format '{{.Name}}/{{.Replicas}}' ${STACK_NAME}" | awk -F"/" '$1 == '${STACK_NAME}_${SERVICE_NAME}' && $2 != $3 {count++; printf "%-50s\t%d/%d\n", $1, $2, $3} BEGIN { count=0 } END {exit count}'; then
        # Check update service status.
        if ssh_run_command "docker service inspect --format '{{.Spec.Name}}/{{if .UpdateStatus}}{{.UpdateStatus.State}}{{else}}completed{{end}}' ${STACK_NAME}_${SERVICE_NAME}" | awk -F"/" '$2 != "completed" {count++; printf "%-50s\t%s\n", $1, $2} BEGIN { count=0 } END {exit count}'; then
          return 0
        fi
      fi

      # Next try.
      if [[ "${TRY}" -lt "${COUNT}" ]]; then
        sleep 10
      fi
    done
  fi

  error "Check Docker Swarm services failed!"
}


# Check if all specific pods is running in Kubernetes.
check_kubernetes_pods() {
  local COUNT="$1"
  local LABEL="$2"

  if [[ -z "${COUNT}" || -z "${LABEL}" ]]; then
    error "Empty required input arguments: 'COUNT', 'LABEL'!"
  fi

  # Setting SSH requirements.
  set_ssh

  for TRY in $(seq 1 ${COUNT}); do
    # Check service status of replicates.
    if ssh_run_command "kubectl get pod -A -l ${LABEL} --no-headers | awk '{printf \"%s/%s/%s\n\", \$1, \$2, \$3}'" | awk -F"/" '$3 != $4 {count++; printf "%-30s\t%-50s\t%d/%d\n", $1, $2, $3, $4} BEGIN { count=0 } END {exit count}'; then
      return 0
    fi

    # Next try.
    if [[ "${TRY}" -lt "${COUNT}" ]]; then
      sleep 20
    fi
  done

  error "Check Docker Swarm services failed!"
}


# Check URL response code status.
check_url() {
  local URL="$1"
  local WAIT="$2"
  local COUNT="$3"
  local CODE="$4"

  if [[ -z "${URL}" || -z "${WAIT}" || -z "${COUNT}" || -z "${CODE}" ]]; then
    error "Empty required input arguments: 'URL', 'WAIT', 'COUNT', 'CODE'!"
  fi

  # Wait for run first check.
  sleep "${WAIT}"

  for TRY in $(seq 1 "${COUNT}"); do
    # Check update service status.
    local RESPONSE=$(curl -sko /dev/null -w "%{http_code}\n" "${URL}")

    # Compare response code with required.
    if [[ "${RESPONSE}" -eq "${CODE}" ]]; then
      return 0
    fi

    # Next try.
    if [[ "${TRY}" -lt "${COUNT}" ]]; then
      sleep 20
    fi
  done

  error "Check URL '${URL}' status response '${CODE}' failed!"
}
