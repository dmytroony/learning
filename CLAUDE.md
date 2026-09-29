# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Use short answers only, no code - key information only.

Before refactoring and work with code read the file spec.md everytime.

BLOG.md rule: all updates go on top — newest post first, oldest at the bottom. Never append new posts at the end.


## What this repository is

This is a personal, multi-language learning/sandbox monorepo (`learning`), not a single application. Each top-level directory is an independent language or framework track (courses, books, tutorial-along-the-way code), and many subdirectories inside those are themselves standalone, unrelated projects (different tutorials, challenges, or scaffolded apps). There is **no root-level build, lint, or test command** — tooling is per-project, scoped to whichever subdirectory you're working in. See `spec.md` for the full directory-by-directory inventory and stack list.

## Working in this repo

- **Always `cd` into the specific project subdirectory before running any tooling.** There is no shared `package.json`, virtualenv, or build config at the repo root — each project brings its own.
- Directories named `out/`, `cmake-build-debug/`, `.vs/`, and compiled binaries (`*.exe`, `*.o`, and extension-less binaries like `clang/c_hello/hello`) are build artifacts checked into some project folders — treat them as generated, not source.
- Given the "one repo, many unrelated tutorials" structure, changes should stay scoped to the single project/folder being worked on. Don't assume conventions from one language track apply to another.

## Docker dev environment

See the `docker-dev-env` skill for how to open and use the containerized dev environment.
