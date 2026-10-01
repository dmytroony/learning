# Session notes — npm auto-update permission fix (2026-09-29)

## Problem
`claude doctor` warned: auto-update failed, no write permission to npm global prefix.
Root cause: `@anthropic-ai/claude-code` files under
`/usr/local/nvm/versions/node/v24.19.0/lib/node_modules/@anthropic-ai/` are owned by
`root` (installed during the `local-ubuntu-base:24.04` image build), but the
`learning-env` container runs as `ubuntu` (uid 1000), per `docker-compose.yml`'s
`user: "1000:1000"`. No `sudo` is available inside the container.

## Decision
Fix ownership in this repo's `Dockerfile` (not in the external base image), so the
fix is versioned, visible in `git diff`, and survives every rebuild of `learning-env`.

## Planned change (not yet applied)
Add to `/workspace/Dockerfile`:

    RUN chown -R 1000:1000 /usr/local/nvm/versions/node/*/lib/node_modules

## Steps to apply (run from WSL host, not from inside this container — no docker CLI in here)
1. Claude Code edits `Dockerfile` to add the line above.
2. `docker-compose up -d --build` — rebuilds `learning-env` with the fix.
3. `docker exec -it learning-env bash` — re-enter the container.
4. Verify: `ls -ld /usr/local/nvm/versions/node/*/lib/node_modules/@anthropic-ai` should
   show `ubuntu ubuntu` instead of `root root`; `claude doctor` should no longer warn.
5. Optional: commit the Dockerfile change once confirmed working.

## Important caveat discovered
`~/.claude/projects/*.jsonl` (Claude Code session transcripts) live under
`/home/ubuntu`, which is on the container's own writable layer — NOT the
bind-mounted `/workspace` (`/dev/sdf`). Rebuilding/recreating the container
(`docker-compose up -d --build`, or any `down`+`up`) wipes that history. This file
was written to `/workspace` specifically so the plan survives that rebuild even if
the chat transcript doesn't.
