SHELL ?= /usr/local/bin/bash
SELF_DIR := $(dir $(lastword $(MAKEFILE_LIST)))

# Docker compose commands
DOCKER_COMPOSE = docker-compose -f $(SELF_DIR)docker-compose.yml

.PHONY: dev result clean

dev:
	$(DOCKER_COMPOSE) up --build dev

result:
	$(DOCKER_COMPOSE) up --build result

clean:
	$(DOCKER_COMPOSE) down -v --rmi all
