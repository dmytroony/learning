---
name: docker-dev-env
description: How to open and use this repo's containerized dev environment (docker-compose, VS Code Dev Containers). Use when asked to start/open the dev container, run docker-compose in this repo, or work inside the devcontainer.
---

The repo can be opened inside a containerized dev environment (built from a local `local-ubuntu-base:24.04` image, so that base image must exist locally first):

```
docker-compose up -d --build
docker exec -it learning-env bash
```

This mounts the whole repo at `/workspace` read-write inside the container; it's a generic shell environment for working across any of the project folders, not a runner for a specific app.

VS Code (or any devcontainer-aware client) can instead use `.devcontainer/devcontainer.json`, which reuses the same `docker-compose.yml` service ("Reopen in Container") instead of running the two commands above by hand.
