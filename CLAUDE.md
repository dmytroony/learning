# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a personal, multi-language learning/sandbox monorepo (`learning`), not a single application. Each top-level directory is an independent language or framework track (courses, books, tutorial-along-the-way code), and many subdirectories inside those are themselves standalone, unrelated projects (different tutorials, challenges, or scaffolded apps). There is **no root-level build, lint, or test command** — tooling is per-project, scoped to whichever subdirectory you're working in.

Top-level areas:
- `javascript/`, `js/`, `ds-s_and_algs/` — vanilla JS, ECMAScript course code, TypeScript exercises (`javascript/typescript_learn/`, `javascript/typescript/`), and framework playgrounds under `javascript/frameworks/` (bun, deno, express, lynxjs, nodejs, react, vue)
- `python/` — separate scripts/projects: `python/code-basics/`, `python/hackingchallenge/`, `python/Super-Pirate-World/` (a pygame project with its own `code/`, `graphics/`, `audio/`, `data/`)
- `cpp/`, `clang/`, `csharp/`, `dart/` — small compiled-language exercises, several with their own `CMakeLists.txt` or `.sln`
- `flutter/` — two independent Flutter apps (`helloworld/`, `myapp/`), each with a standard Flutter project layout (`lib/`, `android/`, `ios/`, `web/`, `pubspec.yaml`)
- `css/`, `sass/`, `scss/`, `layouts/`, `php/` — static styling/markup exercises
- `projects/` — larger, self-contained project folders: `JavaScript30/` (30 independent daily projects), `React/` (several separate CRA/React apps: `bug-tracker`, `gh-jobs-api-app`, `superchat`, `blog1_gatsby`), `vue-apps/crm-acc/`, `fullstack/` (`node-stack/`, `vue-node/`), `Bootstrap4/`, `bootstrap5/`, `html_css_js/`, `materialize-css-v1/`
- `docker/docker_crash/` — a Docker/Node "crash course" exercise with its own `package.json`, `Dockerfile`, and `mongo-services.yaml`

## Working in this repo

- **Always `cd` into the specific project subdirectory before running any tooling.** There is no shared `package.json`, virtualenv, or build config at the repo root — each project brings its own.
- Before running a build/test/lint command, check what's actually present in that subdirectory: `package.json` (Node/npm — run `npm install` then whatever script is defined, e.g. `npm start`/`npm run dev`), `pubspec.yaml` (Flutter — `flutter pub get`, `flutter run`), `CMakeLists.txt` (C/C++ — `cmake` + `make`), `*.sln` (C# — `dotnet build`/`dotnet run`), or a bare script (Python — `python <file>.py`). Don't assume a command works repo-wide.
- Directories named `out/`, `cmake-build-debug/`, `.vs/`, and compiled binaries (`*.exe`, `*.o`, and extension-less binaries like `clang/c_hello/hello`) are build artifacts checked into some project folders — treat them as generated, not source.
- Given the "one repo, many unrelated tutorials" structure, changes should stay scoped to the single project/folder being worked on. Don't assume conventions from one language track apply to another.

## Docker dev environment

The repo can be opened inside a containerized dev environment (built from a local `local-ubuntu-base:24.04` image, so that base image must exist locally first):

```
docker-compose up -d --build
docker exec -it learning-env bash
```

This mounts the whole repo at `/workspace` read-write inside the container; it's a generic shell environment for working across any of the project folders, not a runner for a specific app.
