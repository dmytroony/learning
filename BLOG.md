# Learning Blog

Notes on what has been built and learned in this repo. Newest posts on top, oldest at the bottom.

## Contents
- [2026-09 — The state of the repo: an FAQ](#2026-09--the-state-of-the-repo-an-faq)

---

## 2026-09 — The state of the repo: an FAQ
*672 commits · 2026-09-28 ← 2019-01-03*

### What changed most recently?
In September 2026 the repo got tooling, documentation, and — at the end of the month — a security pass, not new exercises:
- A cleanup pass based on the spec's technical-debt list (`b048a9a`).
- [CLAUDE.md](CLAUDE.md) and [spec.md](spec.md), which describe the layout, toolchains, conventions and technical debt.
- A generic Docker dev environment ([Dockerfile](Dockerfile), [docker-compose.yml](docker-compose.yml)), capped at 2 GB memory with no swap.
- This blog (`BLOG.md`), plus a rule that new posts always go on top.
- **2026-09-27 — GitHub security cleanup**, done partly in the repo and partly on GitHub itself:
  - Secret scanning and push protection were enabled on the repo (previously disabled, despite the repo being public).
  - Secret scanning flagged a hardcoded MongoDB Atlas connection string in [projects/fullstack/node-stack/todo-fullstack-app/](projects/fullstack/node-stack/todo-fullstack-app/), present in the commit history since 2020 (`942b044`). The credentials were rotated in Atlas and the old cluster host (`cluster0.ot80v`) no longer resolves, so the leaked ones are dead either way; the app now reads `MONGODB_URI` from an untracked `.env` (`.env.example` committed instead).
  - The fixer.io key issue from `spec.md §6` was closed out the same way (`f954c9d`): new key regenerated, old one revoked.
  - ~2,900 open Dependabot alerts across 31 npm projects were reviewed. The critical ones — Next.js RCE and middleware auth-bypass in [javascript/frameworks/react/learnreact18/](javascript/frameworks/react/learnreact18/) — were fixed by upgrading Next.js 14.0.1 → 15.5.26 and React 18 → 19 (`e2ab88d`). The rest were dismissed as tolerable risk: learning/sandbox projects, run locally only, never deployed. All ~2,900 alerts are now closed — zero open.
  - **Follow-up (`eec59e0`, `0f307dc`):** the two Google API key alerts were resolved. The [projects/React/superchat/](projects/React/superchat/) key was already invalid (its Firebase project is gone), so alert #1 was closed as "revoked". The [projects/vue-apps/crm-acc/](projects/vue-apps/crm-acc/) key was restricted in Google Cloud Console to its own Firebase referrers and to only the Identity Toolkit / Token Service / Realtime Database APIs, with other referrers verified blocked, so alert #2 was closed as "won't fix"; the crm-acc Realtime Database turned out to be already deactivated by Firebase. Secret scanning alert #3 (MongoDB) was closed as "revoked" too. `spec.md` issues #11 and #12 are now marked solved — zero open secret scanning alerts.
- **Later on 2026-09-27 — agent tooling and a dev-container memory bump:**
  - `b4510b7` starts tracking Claude Code agents and skills in git: `.gitignore` switched from blanket-ignoring `.claude/` to `.claude/*` with exceptions for `agents/` and `skills/`, and a `code-faq` agent plus a matching `/code-faq` skill (the one that writes this file) were added, while local `.claude/settings*` stay untracked.
  - [docker-compose.yml](docker-compose.yml) and [spec.md §4.1](spec.md) raise the dev container's `mem_limit`/`memswap_limit` from 2 GB to 6 GB (still no swap), after `npm install` for a new Next.js scaffold died with exit 137 under the old 2 GB cap. A first attempt to scaffold a Next.js e-commerce starter (TypeScript, Tailwind, Better Auth, Drizzle, Neon) under `llms/atelier-store/` was killed by the same limit and fully reverted — the folder is empty again, to be retried once the higher memory cap lands.
  - **2026-09-28 — container file ownership fixed (`bf58094`):** [docker-compose.yml](docker-compose.yml) now sets `user: "1000:1000"` on the `learning-env` service, so files created from inside the container land on the host owned by the regular user instead of root.
  - **2026-09-28 — VS Code Dev Containers support (`a593fc7`):** a new [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json) reuses the existing `docker-compose.yml`'s `learning-env` service (workspace folder `/workspace`, remote user `ubuntu`, `shutdownAction: stopCompose`), so VS Code (or any devcontainer-aware client) can "Reopen in Container" instead of running `docker-compose up` and `docker exec` by hand. No `postCreateCommand` or extension list was added, since the repo spans too many independent language tracks for one generic toolchain bootstrap to make sense.

### What's still open?
The technical-debt table in [spec.md §6](spec.md) lists most of what remains: outdated stacks, versions that aren't pinned, Python projects with no requirements files, and some folder names that don't match the rest. The September 27 security review closed out everything else — secret scanning alerts and Dependabot alerts are both at zero open.

### How did the work move over the years?
| Year | Commits | Main focus |
|---|---|---|
| 2026 | 29 | C#/C++ exercises, Python touch-ups, a dev container, AI-agent docs, a September security cleanup, container file-ownership fix, and VS Code Dev Containers support |
| 2025 | 16 | JS frameworks (Vue 3 + Vite, Lynx), ECMAScript |
| 2024 | 110 | *Super Pirate World* (pygame), frameworks, TypeScript + Vite, Docker crash course, data structures |
| 2023 | 31 | JS frameworks and ECMAScript |
| 2022 | 24 | ECMAScript, a toy blockchain, Java console apps |
| 2021 | 72 | Flutter apps, ECMAScript, Materialize, TypeScript |
| 2020 | 267 | Busiest year: Python challenges, framework playgrounds, Bootstrap and vanilla HTML/CSS/JS projects |
| 2019 | 123 | JS books, jQuery/Slick, JavaScript30, the root landing page |

### What has been finished?
According to the learning log in [README.md](README.md), newest first:
- Hacking Challenge, Mar 2020 — [python/hackingchallenge/](python/hackingchallenge/)
- code-basics.com (77/77 lessons), Feb 2020 — [python/code-basics/](python/code-basics/)
- *Eloquent JavaScript* (Haverbeke), Oct–Dec 2019 — [javascript/books/EloquentJavascript/](javascript/books/EloquentJavascript/)
- JavaScript30 challenge, Oct–Nov 2019 — [projects/JavaScript30/](projects/JavaScript30/)
- *JS on Examples* (Nikolskiy), Sep–Oct 2019 — [javascript/books/JsOnExamples/](javascript/books/JsOnExamples/)
- *Code for Teens* (Moritz), Sep 2019 — [javascript/books/CodeForTeens/](javascript/books/CodeForTeens/)

### What languages and tracks are covered?
- **JavaScript / TypeScript** — books, ECMAScript exercises, TS practice and framework playgrounds (React, Vue, Next, Express, Node, Bun, Deno, Lynx): [javascript/](javascript/)
- **Projects** — JavaScript30, React apps, a Vue CRM, full-stack Node apps, Bootstrap and Materialize sites: [projects/](projects/)
- **Python** — basics, a local brute-force "hacking challenge" and a pygame platformer, *Super Pirate World*: [python/](python/)
- **Other languages** — C, C++, C#, Java, Dart and two Flutter apps: [clang/](clang/), [cpp/](cpp/), [csharp/](csharp/), [java/](java/), [dart/](dart/), [flutter/](flutter/)
- **Styling / markup** — CSS, Sass/SCSS and layout exercises: [css/](css/), [scss/](scss/), [layouts/](layouts/)
- **Docker** — a crash-course exercise with Node + MongoDB: [docker/docker_crash/](docker/docker_crash/)

### Can I run everything from the root?
No. `cd` into a project folder and use its own manifest (`package.json`, `CMakeLists.txt`, `pubspec.yaml`, …). Older stacks (CRA 3, Vue CLI 4, Gatsby 2, node-sass) need an older Node version or `NODE_OPTIONS=--openssl-legacy-provider`.

### What is this repo?
A personal learning sandbox: many small, independent projects in one monorepo. Each project folder has its own tooling. Nothing is built from the repo root. See [spec.md](spec.md) for the full technical specification.
