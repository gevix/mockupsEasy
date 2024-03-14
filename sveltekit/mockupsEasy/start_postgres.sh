#!/bin/bash

# Define variables
CONTAINER_NAME="postgres_container"
POSTGRES_USER="Denis"
POSTGRES_PASSWORD="qazwsxedc123"
POSTGRES_DB="mockups_easy"
POSTGRES_PORT="5432"

# Check if the container is already running
if docker ps -a --format '{{.Names}}' | grep -q "^$CONTAINER_NAME$"; then
    echo "PostgreSQL container is already running."
    exit 0
fi

# Run PostgreSQL container
docker run -d \
    --name "$CONTAINER_NAME" \
    -e POSTGRES_USER="$POSTGRES_USER" \
    -e POSTGRES_PASSWORD="$POSTGRES_PASSWORD" \
    -e POSTGRES_DB="$POSTGRES_DB" \
    -p "$POSTGRES_PORT:5432" \
    -v "$VOLUME_PATH:/var/lib/postgresql/data" \
    postgres:latest

# Check if PostgreSQL container started successfully
if [ $? -eq 0 ]; then
    echo "PostgreSQL container has been started successfully."
else
    echo "Failed to start PostgreSQL container."
fi
