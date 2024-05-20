#!/bin/bash

docker build -t django-image -f Dockerfile-django . 
docker compose down
docker compose up 
