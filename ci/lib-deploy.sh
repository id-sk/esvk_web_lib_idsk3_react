#!/bin/bash
# version 1.16.2

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


# Rsync directory to server.
rsync_to_server() {
  if ${REQUIRED_SET_SSH}; then
    error "SSH settings is not inicialized! Run beafor 'set_ssh'!"
  fi

  local LOCAL_PATH="$1"
  local SERVER_PATH="$2"

  if [[ -z "${LOCAL_PATH}" || -z "${SERVER_PATH}" ]]; then
    error "Empty required input arguments: 'LOCAL_PATH', 'SERVER_PATH'!"
  fi

  if [[ ! -d "${LOCAL_PATH}" ]]; then
    error "Direcotry '${LOCAL_PATH}' not found in Gitlab Project!"
  fi

  if ! rsync -azv --delete -e "ssh -i ${SSH_KEY} -o StrictHostKeyChecking=no -o IdentitiesOnly=yes" "${LOCAL_PATH}" "${SSH_CONNECT}:${SERVER_PATH}"; then
    error "Failed to rsync directory '${LOCAL_PATH}' to server path '${SSH_CONNECT}:${SERVER_PATH}'!"
  fi
}


# create Docker compose file on server
create_docker_compose() {
  # check requerments
  check_ci_variables "CI_REGISTRY_IMAGE"

  local SERVER_DIR="$1"
  local DOCKER_COMPOSE_FILE="$2"

  if [[ -z "${SERVER_DIR}" || -z "${DOCKER_COMPOSE_FILE}" ]]; then
    error "Empty required input arguments: 'SERVER_DIR', 'DOCKER_COMPOSE_FILE'!"
  fi

  if [[ ! -f "${DOCKER_COMPOSE_FILE}" ]]; then
    error "File '${DOCKER_COMPOSE_FILE}' not found in Gitlab Project!"
  fi

  # create directory on server
  create_remote_directory "${SERVER_DIR}"

  # replace default Gitlab CI Variable for docker compose file
  replace_ci_variables "${DOCKER_COMPOSE_FILE}"

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


# Run deploy script on server.
run_deploy() {
  if ${REQUIRED_SET_SSH}; then
    error "SSH settings is not inicialized! Run beafor 'set_ssh'!"
  fi

  local SERVER_PATH="$1"

  if [[ -z "${SERVER_PATH}" ]]; then
    error "Empty required input arguments: 'SERVER_PATH'!"
  fi

  chmod 744 "deploy.sh"
  copy_file_to_server "deploy.sh" "${SERVER_PATH}/deploy.sh"

  if ! ssh_run_command "${SERVER_PATH}/deploy.sh"; then
    error "Deploy script failed!"
  fi
}


# Rsync project to server.
deploy_project() {
  local LOCAL_PATH="$1"
  local SERVER_PATH="$2"

  if [[ -z "${LOCAL_PATH}" || -z "${SERVER_PATH}" ]]; then
    error "Empty required input arguments: 'LOCAL_PATH', 'SERVER_PATH'!"
  fi

  if [[ ! -d "${LOCAL_PATH}" ]]; then
    error "Direcotry '${LOCAL_PATH}' not found in Gitlab Project!"
  fi

  # Setting SSH requirements.
  set_ssh

  if ! rsync -azv -e "ssh -i ${SSH_KEY} -o StrictHostKeyChecking=no -o IdentitiesOnly=yes" --delete --exclude ".git" --exclude "ci" --exclude ".gitlab-ci.yml" "${LOCAL_PATH}" "${SSH_CONNECT}:${SERVER_PATH}"; then
    error "Failed to rsync directory '${LOCAL_PATH}' to server path '${SSH_CONNECT}:${SERVER_PATH}'!"
  fi
}


# set pipeline (CI_REGISTRY_USER/CI_REGISTRY_PASSWORD) docker login on deployment server
deploy_docker_login() {
  # check requerments
  check_ci_variables "CI_REGISTRY" "CI_REGISTRY_USER" "CI_REGISTRY_PASSWORD"

  # setting SSH requirements
  set_ssh

  # login to docker registry
  if ! ssh_run_command docker login -u "${CI_REGISTRY_USER}" -p "${CI_REGISTRY_PASSWORD}" "${CI_REGISTRY}"; then
    error "Failed login to docker registry!"
  fi
}


# set pipeline (CI_REGISTRY_USER/CI_REGISTRY_PASSWORD) helm registry login on deployment server
deploy_helm_registry_login() {
  # check requerments
  check_ci_variables "CI_REGISTRY" "CI_REGISTRY_USER" "CI_REGISTRY_PASSWORD"

  # setting SSH requirements
  set_ssh

  # login to docker registry
  if ! ssh_run_command helm registry login -u "${CI_REGISTRY_USER}" -p "${CI_REGISTRY_PASSWORD}" "${CI_REGISTRY}"; then
    error "Failed login to helm registry!"
  fi
}


# Up docker compose on deployment server.
deploy_docker_compose() {
  # check requerments
  check_ci_variables "CI_PROJECT_NAME"

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
  if ! ssh_run_command docker compose -f "/srv/${CONTAINER_NAME}/docker-compose.yml" up -d; then
    error "Docker compose up failed!"
  fi
}


# Stack deploy docker compose swarm on deployment master server.
deploy_docker_swarm() {
  # check requerments
  check_ci_variables "CI_PROJECT_NAME"

  local STACK_NAME="$1"
  local DOCKER_COMPOSE_FILE="$2"

  # Set docker stack name "CI_PROJECT_NAME" if not set
  if [[ -z "${STACK_NAME}" ]]; then
    local STACK_NAME="${CI_PROJECT_NAME}"
  fi

  if [[ -z "${DOCKER_COMPOSE_FILE}" ]]; then
    local DOCKER_COMPOSE_FILE="docker-compose-swarm.yml"
  fi

  # Setting SSH requirements
  set_ssh

  # Create Docker compose file
  create_docker_compose "/srv/${CI_PROJECT_NAME}" "${DOCKER_COMPOSE_FILE}"
  copy_file_to_server "${DOCKER_COMPOSE_FILE}" "/srv/${CI_PROJECT_NAME}/docker-compose-swarm.yml"

  # Create deploy script
  cat << EOF > "deploy.sh"
  #!/bin/bash

  # deploy command
  for TRY in \$(seq 1 5); do
    if ! OUTPUT=\$(docker stack deploy -c "/srv/${CI_PROJECT_NAME}/docker-compose-swarm.yml" --with-registry-auth "${STACK_NAME}" 2>&1); then
      echo "Attempt \${TRY}, return error: '\${OUTPUT}'"

      if CONFIG=\$(awk '\$0 ~ /^failed to update config [a-z\-_]+: Error response from daemon: rpc error: code = InvalidArgument desc = only updates to Labels are allowed\$/ {print substr(\$5, 1, length(\$5)-1); rc=1} END{exit !rc}' <<< "\${OUTPUT}"); then
        echo "Find config: '\${CONFIG}'"

        if ! OUTPUT=\$(docker config rm "\${CONFIG}" 2>&1); then
          echo "Return error: '\${OUTPUT}'"

          if SERVICE=\$(awk '\$0 ~ /^Error response from daemon: rpc error: code = InvalidArgument desc = config '\'\${CONFIG}\'' is in use by the following service: [a-z\-_]+\$/ {print \$21; rc=1} END{exit !rc}' <<< "\${OUTPUT}"); then
            echo "Find service: \${SERVICE}"

            # Remove docker service
            if ! OUTPUT=\$(docker service rm "\${SERVICE}"); then
              echo "Failed to delete docker service '\${SERVICE}', return error: '\${OUTPUT}'"
              exit 101

            else
              echo "Removed docker service '\${SERVICE}'"
            fi

            # Remove docker config
            if ! OUTPUT=\$(docker config rm "\${CONFIG}"); then
              echo "Failed to delete docker config '\${CONFIG}', return error: '\${OUTPUT}'"
              exit 102

            else
              echo "Removed docker config '\${CONFIG}'"
            fi

          else
            echo "Uncorrected error"
            exit 10
          fi

        else
          echo "Removed docker config '\${CONFIG}'"
        fi

      elif awk '\$0 ~ /^read .+: is a directory\$/ {rc=1} END{exit !rc}' <<< "\${OUTPUT}"; then
        echo "Not defined Gitlab CI/CD variables:"
        awk '\$0 ~ /\\\${.+}/ {print NR, \$0}' "/srv/${CI_PROJECT_NAME}/docker-compose-swarm.yml"
        exit 201

      else
        echo "Uncorrected error"
        exit 10
      fi

    else
      echo "\${OUTPUT}"
      break
    fi
  done
EOF

  # Run Docker Stack Deploy
  if ! run_deploy "/srv/${CI_PROJECT_NAME}"; then
    error "Docker stack deploy failed!"
  fi
}


# deploy and apply yaml file on kubernetes
deploy_k8s_apply() {
  # check requerments
  check_ci_variables "CI_PROJECT_NAME"

  local FILE_PATH="$1"

  if [[ -z "${FILE_PATH}" ]]; then
    error "Empty required input arguments: 'FILE_PATH'!"
  fi

  local FILE_NAME=$(basename "${FILE_PATH}")

  set_ssh

  # update and copy yaml file to server
  create_remote_directory "/srv/${CI_PROJECT_NAME}"
  replace_ci_variables "${FILE_PATH}"
  copy_file_to_server "${FILE_PATH}" "/srv/${CI_PROJECT_NAME}/${FILE_NAME}"

  # apply yaml file
  local CMD_ARG=""

  if [[ -n "${NAMESPACE}" ]]; then
    CMD_ARG="-n \"${NAMESPACE}\" "

    # create namespace if not exists
    if ! ssh_run_command kubectl get namespace | grep "${NAMESPACE} "; then
      if ! ssh_run_command kubectl create namespace "${NAMESPACE}"; then
        error "Command kubectl create namespace failed!"
      fi
    fi
  fi

  if ! ssh_run_command kubectl apply ${CMD_ARG}-f "/srv/${CI_PROJECT_NAME}/${FILE_NAME}"; then
    error "Command kubectl apply failed!"
  fi
}


# Deploy helm chart to kubernetes.
deploy_helm_chart() {
  # check requerments
  check_ci_variables "CI_REGISTRY_IMAGE"

  local CHART_URL="$1"
  local CHART_VERSION="$2"
  local VALUES_FILE="$3"
  local GLOBAL_VALUES_FILE="$4"

  if [[ -z "${CHART_URL}" || -z "${CHART_VERSION}" || -z "${VALUES_FILE}" ]]; then
    error "Empty required input arguments: 'CHART_URL', 'CHART_VERSION', 'VALUES_FILE'!"
  fi

  local CHART_NAME=`basename "${CHART_URL}"`

  # set deploy name if not set
  if [[ -z "${DEPLOY_NAME}" ]]; then
    local DEPLOY_NAME="${CHART_NAME}"
  fi
  
  # setting SSH requirements
  set_ssh

  # remove helm chart on server
  if ! ssh_run_command rm -rf "/srv/${DEPLOY_NAME}"; then
    error "Remove deployment directory "/srv/${DEPLOY_NAME}" failed!"
  fi

  if [[ "${DEPLOY_NAME}" != "${CHART_NAME}" ]]; then
    if ! ssh_run_command rm -rf "/srv/${CHART_NAME}"; then
      error "Remove Helm Chart directory "/srv/${CHART_NAME}" failed!"
    fi
  fi

  # download helm chart to server
  local CMD_ENV=""

  if [[ -n "${HTTP_PROXY}" ]]; then
    CMD_ENV="https_proxy=\"${HTTP_PROXY}\" "
  fi

  if ! ssh_run_command ${CMD_ENV}helm pull "${CHART_URL}" --version "${CHART_VERSION}" --untar --untardir "/srv"; then
    error "Helm Chart pull failed!"
  fi

  # fix untar directory name
  if [[ "${DEPLOY_NAME}" != "${CHART_NAME}" ]]; then
    if ! ssh_run_command mv "/srv/${CHART_NAME}" "/srv/${DEPLOY_NAME}"; then
      error "Canot move Helm Chart "/srv/${CHART_NAME}" to "/srv/${DEPLOY_NAME}"!"
    fi
  fi

  # replace default Gitlab CI Variable for helm values file
  replace_ci_variables "${VALUES_FILE}"

  if [[ -n "${GLOBAL_VALUES_FILE}" ]]; then
    replace_ci_variables "${GLOBAL_VALUES_FILE}"
  fi

  # Exists Build number
  if [[ -n "${BUILD_NUMBER}" ]]; then
    local IMAGE_NAME="${CI_REGISTRY_IMAGE}"

    # Read docker image tag if not defined
    if [[ -z "${IMAGE_TAG}" ]]; then
      local IMAGE_TAG
      IMAGE_TAG="$(get_docker_image_tag)"

      if [[ "$?" -ne 0 || -z "${IMAGE_TAG}" ]]; then
        error "Failed read docker image tag!" "get_docker_image_tag" "${IMAGE_TAG}"
      fi
    fi

    # Replace generate Variable for helm values file
    for GITLAB_VARIABLE in "IMAGE_NAME" "IMAGE_TAG"; do
      sed -ie "s#\${${GITLAB_VARIABLE}}#${!GITLAB_VARIABLE}#" "${VALUES_FILE}"
    done
  fi

  # Process Gitlab CI Variable for helm values file
  for GITLAB_VARIABLE in `printenv | awk -F "=" '/^DC_/ {print $1}'`; do
    # File.
    if [[ -f "${!GITLAB_VARIABLE}" ]]; then
      # Clear newline from default base64
      local JSON="$(tr -d '\n' < ${!GITLAB_VARIABLE})"
      local FILENAME="$(jq -r 'keys[0] // empty' <<< ${JSON})"

      if [[ -z "${FILENAME}" || "${FILENAME}" != "$(basename ${FILENAME})" ]]; then
        error "Could not get file name '${FILENAME}' from Gitlab CI variable '${GITLAB_VARIABLE}'!"
      fi

      # Save data to file
      if ! jq -r ".[keys[0]] // empty" <<< ${JSON} | base64 -d > "${FILENAME}"; then
        error "Failed to decode file contents from Gitlab CI Variable '${GITLAB_VARIABLE}'!"
      fi

      # Copy created file to server
      copy_file_to_server "${FILENAME}" "/srv/${DEPLOY_NAME}/${FILENAME}"

      # Replace file name from Gitlab CI Variable type file
      sed -ie "s#\${${GITLAB_VARIABLE}}#${FILENAME}#" "${VALUES_FILE}"

      if [[ -n "${GLOBAL_VALUES_FILE}" ]]; then
        sed -ie "s#\${${GITLAB_VARIABLE}}#${FILENAME}#" "${GLOBAL_VALUES_FILE}"
      fi

    # Only variable with value
    else
      sed -ie "s#\${${GITLAB_VARIABLE}}#${!GITLAB_VARIABLE}#" "${VALUES_FILE}"

      if [[ -n "${GLOBAL_VALUES_FILE}" ]]; then
        sed -ie "s#\${${GITLAB_VARIABLE}}#${!GITLAB_VARIABLE}#" "${GLOBAL_VALUES_FILE}"
      fi
    fi
  done

  # Copy values file
  copy_file_to_server "${VALUES_FILE}" "/srv/${DEPLOY_NAME}/helm_chart-values.yml"

  # Copy global values file if exists
  if [[ -n "${GLOBAL_VALUES_FILE}" ]]; then
    copy_file_to_server "${GLOBAL_VALUES_FILE}" "/srv/${DEPLOY_NAME}/helm_chart-global_values.yml"
  fi

  # create deploy script
  local CMD_ARG=""

  if [[ -n "${NAMESPACE}" ]]; then
    CMD_ARG="-n \"${NAMESPACE}\" "

    # create namespace if not exists
    if ! ssh_run_command kubectl get namespace | grep "${NAMESPACE} "; then
      if ! ssh_run_command kubectl create namespace "${NAMESPACE}"; then
        error "Command kubectl create namespace failed!"
      fi
    fi
  fi

  if [[ -n "${GLOBAL_VALUES_FILE}" ]]; then
    CMD_ARG="${CMD_ARG}-f \"/srv/${DEPLOY_NAME}/helm_chart-global_values.yml\" "
  fi

  cat << EOF > "deploy.sh"
#!/bin/bash

# deploy command
helm upgrade --install ${CMD_ARG}-f "/srv/${DEPLOY_NAME}/helm_chart-values.yml" "${DEPLOY_NAME}" "/srv/${DEPLOY_NAME}"
EOF

  # Install/upgrade Helm Chart
  if ! run_deploy "/srv/${DEPLOY_NAME}"; then
    error "Helm Chart install/upgrade failed!"
  fi
}


# uninstall helm chart
helm_uninstall() {
  local DEPLOY_NAME="$1"

  if [[ -z "${DEPLOY_NAME}" ]]; then
    error "Empty required input arguments: 'DEPLOY_NAME'!"
  fi

  # setting SSH requirements
  set_ssh

  local CMD_ARG=""

  if [[ -n "${NAMESPACE}" ]]; then
    CMD_ARG="-n \"${NAMESPACE}\" "
  fi

  # check if helm chart exists
  if [[ $(ssh_run_command "helm status ${CMD_ARG}\"${DEPLOY_NAME}\" | awk '\$1 == \"STATUS:\" {print \$2}'") == "deployed" ]]; then
    # uninstall helm chart
    if ! ssh_run_command "helm uninstall ${CMD_ARG}\"${DEPLOY_NAME}\""; then
      error "Failed to uninstall helm chart '${DEPLOY_NAME}'!"
    fi
  fi
}


# Check docker swarm stack services running status.
check_docker_swarm() {
  # check requerments
  check_ci_variables "CI_PROJECT_NAME"

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


# Check kubernetes pods running status.
check_kubernetes_pods() {
  local COUNT="$1"
  local NAMESPACE="$2"

  if [[ -z "${COUNT}" || -z "${NAMESPACE}" ]]; then
    error "Empty required input arguments: 'COUNT', 'NAMESPACE'!"
  fi

  # Setting SSH requirements.
  set_ssh

  for TRY in $(seq 1 ${COUNT}); do
    # Check service status of replicates. If the pod is not ready or is terminating check again.
    if ssh_run_command "kubectl get pod -n ${NAMESPACE} --no-headers | awk '{printf \"%s/%s/%s\n\", \$1, \$2, \$3}'" | awk -F"/" '$2 != $3 {count++; printf "%-50s\t%d/%d\n", $1, $2, $3} $4 == "Terminating" {count++; printf "%-50s\t%s\n", $1, $4} BEGIN { count=0 } END {exit count}'; then
      return 0
    fi

    # Next try.
    if [[ "${TRY}" -lt "${COUNT}" ]]; then
      sleep 20
    fi
  done

  error "Check Kubernetes pods in namespace '${NAMESPACE}' failed!"
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


# Set on server system crontab on user deploy.
set_cron() {
  local TIME="$1"
  local COMMAND="$(echo $2 | sed -e 's/"/\\"/g')"

  if [[ -z "${TIME}" || -z "${COMMAND}" ]]; then
    error "Empty required input arguments: 'TIME', 'COMMAND'!"
  fi

  # Setting SSH requirements.
  set_ssh

  # Set user crontab on server.
  if ! ssh_run_command "(crontab -l 2>/dev/null | grep -v \" ${COMMAND}$\"; echo -e \"${TIME}\t ${COMMAND}\") | crontab -"; then
    error "Failed to set user crontab!"
  fi

  if ! ssh_run_command "crontab -l"; then
    error "Failed to read user crontab!"
  fi
}
