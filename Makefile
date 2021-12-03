SHELL ?= /usr/local/bin/bash
SELF_DIR := $(dir $(lastword $(MAKEFILE_LIST)))

ifndef DAY
$(error "Error: You must supply a valid day to run (e.g DAY=3 make ...)")
endif

include $(SELF_DIR)/day_$(DAY)/Makefile

