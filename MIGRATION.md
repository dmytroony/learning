# Migration: Docker dev container → WSL + VS Code WSL extension

Move day-to-day work in this repo from the Docker dev container (`learning-env`,
VS Code Dev Containers) to plain WSL Ubuntu 24.04 with VS Code's **WSL** extension.
Reason: building and running the container is too heavy for the Dell E6540.

Way back: [ROLLBACK.md](ROLLBACK.md) (git tag `docker-env-baseline`).

---

## 0. Before you start

- [ ] Backups from [ROLLBACK.md §2](ROLLBACK.md#2-what-is-not-in-the-repo-back-these-up-by-hand) are done (`docker commit` + `docker save`, VS Code profile, `wsl --export`).
- [ ] `migration-backup-2026-10-06.tar.gz` (local files + container home) is copied out of the repo. It has its own `RESTORE.md` inside.
- [ ] Everything in the repo is committed and pushed.

---

## 1. Windows side

1. Update WSL (PowerShell): `wsl --update`, then check the distro: `wsl -l -v` (expect `Ubuntu-24.04`, version 2).
2. Cap WSL resources. Create `C:\Users\<you>\.wslconfig`:
   ```ini
   [wsl2]
   memory=6GB      # same cap the container had; lower it if Windows feels starved
   processors=4    # E6540 i5 = 4 threads, i7 = 8
   swap=2GB
   ```
   Apply with `wsl --shutdown`, then reopen the Ubuntu terminal.
3. Docker Desktop: **Settings → General →** turn off "Start Docker Desktop when you sign in", then quit it.
   Do **not** uninstall it until the new setup has worked for a while.
4. VS Code: install the **WSL** extension (Microsoft). The Dev Containers extension can stay.

---

## 2. Repo in the Linux filesystem

Keep the repo under `~` in WSL, **not** under `/mnt/c/...` (cross-filesystem access is very slow).

```bash
mkdir -p ~/projects
git clone https://github.com/dmytroony/learning.git ~/projects/learning
```

Then restore the local files from the archive, following its `RESTORE.md`
(`.env` files, `CLAUDE.local.md`, `.claude/settings.local.json`, `.vscode/`, `.idea/`, home dotfiles).

**Fix `~/.gitconfig` after restoring it.** The container's copy has a `credential.helper`
line pointing at a Dev Containers script under `/home/ubuntu/.vscode-server/...`,
which does not exist in WSL. Remove it and use Git Credential Manager from Git for Windows instead:

```bash
git config --global --unset-all credential.helper
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
```

(GitHub access is over HTTPS; `~/.ssh` only holds `known_hosts`, no keys.)

---

## 3. Toolchains (replaces `local-ubuntu-base:24.04`)

Install what the container had (spec.md §4.2), directly in WSL:

| Tool | Container version | Install in WSL |
|---|---|---|
| Base tools | — | `sudo apt update && sudo apt install -y build-essential git git-lfs curl unzip` |
| Python | 3.12.3 | Preinstalled. Add `sudo apt install -y python3-venv python3-pip` |
| Node.js | v24.19.0 (nvm) | Install nvm into your home (not `/usr/local/nvm`), then `nvm install 24` |
| pnpm | — | `corepack enable` (used by `llms/atelier-store`) |
| .NET SDK | 8.0 | `sudo apt install -y dotnet-sdk-8.0` |
| Java | OpenJDK 21 | `sudo apt install -y openjdk-21-jdk` |
| C / C++ | — | `sudo apt install -y cmake gdb` (needed for CLion too) |
| Claude Code | — | Native installer from the Claude Code docs, or `npm i -g @anthropic-ai/claude-code` after nvm |

Run `git lfs install` once after installing git-lfs.

Not in the container either, install only when a project needs it: Flutter/Dart, Deno, Bun.

Old-project quirks still apply (spec.md §4.2): CRA 3.4, Vue CLI 4.5, Gatsby 2 and Snowpack 3 need
`NODE_OPTIONS=--openssl-legacy-provider` or Node 14/16 (`nvm install 16`); `node-sass@4` needs Node ≤ 14.
nvm in your home means no root-owned files, so the npm/Claude auto-update permission fix from the
`Dockerfile` is not needed.

---

## 4. VS Code

From the Ubuntu terminal:

```bash
cd ~/projects/learning
code .
```

The status bar shows **WSL: Ubuntu-24.04**. Terminal, extensions and git all run in Linux.
Reinstall extensions "in WSL" when VS Code offers it (or import the profile you exported).

---

## 5. Claude Code memory

Memory is stored per project path. The container used `/workspace`
→ `~/.claude/projects/-workspace/memory/`. After the first `claude` run in
`~/projects/learning`, copy that `memory/` folder into the new project folder
(`~/.claude/projects/-home-<you>-projects-learning/memory/`).

---

## 6. CLion (optional)

The VS Code WSL extension does not apply to JetBrains. CLion has its own WSL support:

1. **Settings → Build, Execution, Deployment → Toolchains → + → WSL**, pick `Ubuntu-24.04`.
   CMake, the compiler and gdb are detected from WSL (install them first, §3).
2. Open the project from `\\wsl$\Ubuntu-24.04\home\<you>\projects\learning\cpp` (or another C/C++ folder).
3. Make the WSL toolchain the default (move it to the top of the list).

CLion runs on Windows and indexes files across the WSL boundary, so large projects index slower.
Budget 2–4 GB RAM for CLion on top of the WSL cap. JetBrains Gateway (IDE backend inside WSL) is faster on
files but uses more RAM — not recommended on the E6540.

---

## 7. Verify

- [ ] `node -v`, `python3 --version`, `dotnet --version`, `java -version`, `cmake --version`
- [ ] `git status` clean; `git pull` / `git push` work without a password prompt loop
- [ ] `cd cpp && cmake -B build && cmake --build build` succeeds
- [ ] `cd llms/atelier-store && pnpm install && pnpm dev` starts
- [ ] `claude` starts logged in and sees the memory
- [ ] Task Manager: `VmmemWSL` stays under the `.wslconfig` cap, no Docker processes running

---

## 8. After it works

- Update docs: `spec.md` §4 and `CLAUDE.md` "Docker dev environment" → WSL is the main environment, Docker is the fallback (see `ROLLBACK.md`). Keep the Docker files.
- After a few stable weeks: optionally remove old Docker images/containers to free disk. Keep the `docker save` backup.
