# Rollback: back to the Docker dev container

This repo is moving from the Docker dev container to plain WSL (Ubuntu 24.04) + VS Code's WSL extension.
This file is the way back if the Docker setup is needed again.

---

## 1. What is preserved in the repo

| Item | Where |
|---|---|
| Git tag `docker-env-baseline` | Commit `7d8c7b0`, the last state where Docker was the main workflow |
| Image definition | `Dockerfile` (`FROM local-ubuntu-base:24.04`, fixes nvm ownership for user 1000) |
| Compose service | `docker-compose.yml`: service `learning-env`, user `1000:1000`, `mem_limit`/`memswap_limit` 6g, repo bind-mounted at `/workspace` |
| VS Code config | `.devcontainer/devcontainer.json`: reuses the compose service, `remoteUser: ubuntu` |
| Agent instructions | `.claude/skills/docker-dev-env/SKILL.md` |

Toolchains in the container at the time of the tag: Node v24.19.0 (nvm, in `/usr/local/nvm`), Python 3.12.3, .NET SDK 8.0, OpenJDK 21.

> **Keep these files.** Do not delete them during the migration. They cost nothing when Docker is not running.

---

## 2. What is NOT in the repo (back these up by hand)

| # | What | Why it matters |
|---|---|---|
| 1 | Base image `local-ubuntu-base:24.04` | **Most important.** It is not in any registry and its Dockerfile is not in this repo. Without it, `docker compose build` fails. |
| 2 | The running container's own filesystem (`/home/ubuntu`: shell history, `~/.claude` config and memory, `~/.gitconfig`, SSH keys, caches) | Only `/workspace` is a bind mount. Everything else lives inside the container and is lost when the container is removed. |
| 3 | The Dockerfile used to build `local-ubuntu-base` (if you still have it somewhere on the host) | Lets you rebuild the base from scratch instead of relying on the image file. |
| 4 | VS Code profile (settings + extension list) | Restores the same editor setup. |
| 5 | WSL distro (`wsl --export`) | Do it **before** installing tools into WSL, so the WSL side can be restored too. |

### Backup checklist

Run on the Windows host (PowerShell) or in WSL with the Docker CLI available. Store the files outside the repo, e.g. `D:\backups\learning-env\`.

- [ ] List images and note the exact name of the built image: `docker images`
- [ ] Snapshot the running container, including `/home/ubuntu`:
  `docker commit learning-env learning-env-snapshot:docker-env-baseline`
- [ ] Save the base image and the snapshot to one file:
  `docker save -o learning-env-backup.tar local-ubuntu-base:24.04 learning-env-snapshot:docker-env-baseline`
- [ ] Copy the base image's Dockerfile (item 3) next to the `.tar`, if it exists
- [ ] VS Code: **Profiles → Export Profile** (or turn on Settings Sync)
- [ ] WSL: `wsl --export Ubuntu-24.04 ubuntu-24.04-before-migration.tar` (check the distro name with `wsl -l -v`)
- [ ] Docker Desktop: turn off "Start Docker Desktop when you sign in". Do **not** uninstall it yet.

---

## 3. Rollback steps

1. Start Docker Desktop. In **Settings → Resources → WSL integration**, enable your Ubuntu distro.
2. Restore the images if they are gone (`docker images`):
   `docker load -i learning-env-backup.tar`
3. Get the Docker files back to the baseline (only if they changed since the tag):
   `git checkout docker-env-baseline -- Dockerfile docker-compose.yml .devcontainer .claude/skills/docker-dev-env`
4. Start the environment, either way:
   - VS Code: open the repo, then **Dev Containers: Reopen in Container**
   - CLI: `docker compose up -d --build`, then `docker exec -it learning-env bash`
5. Optional, to get the old `/home/ubuntu` back exactly: point `docker-compose.yml` at the snapshot image instead of `build: .`, i.e. `image: learning-env-snapshot:docker-env-baseline`.
6. Check the toolchains: `node -v`, `python3 --version`, `dotnet --version`, `java -version`.
7. If you are staying on Docker, turn Docker Desktop's autostart back on.

---

## 4. If the base image is lost and there is no backup

The root `Dockerfile` cannot build without `local-ubuntu-base:24.04`. Rebuild a replacement base:

- Start from `ubuntu:24.04`.
- Install nvm into `/usr/local/nvm` and Node 24 (the root `Dockerfile` expects that path), Python 3.12, .NET SDK 8, OpenJDK 21, git, build tools.
- Create user `ubuntu` with UID/GID 1000 (Ubuntu 24.04 images already have it).
- Tag the result `local-ubuntu-base:24.04`.
