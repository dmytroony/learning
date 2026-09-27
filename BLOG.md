# Learning Blog

Notes on what has been built and learned in this repo. Newest posts on top, oldest at the bottom.

## Contents
- [2026-09 — The state of the repo: an FAQ](#2026-09--the-state-of-the-repo-an-faq)

---

## 2026-09 — The state of the repo: an FAQ
*663 commits · 2026-09-27 ← 2019-01-03*

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
  - Two Google API key alerts (Firebase web config in [projects/React/superchat/](projects/React/superchat/) and [projects/vue-apps/crm-acc/](projects/vue-apps/crm-acc/)) are still open, pending restriction in Google Cloud Console.
  - ~2,900 open Dependabot alerts across 31 npm projects were reviewed. The critical ones — Next.js RCE and middleware auth-bypass in [javascript/frameworks/react/learnreact18/](javascript/frameworks/react/learnreact18/) — were fixed by upgrading Next.js 14.0.1 → 15.5.26 and React 18 → 19 (`e2ab88d`). The rest were dismissed as tolerable risk: learning/sandbox projects, run locally only, never deployed.

### What's still open?
The technical-debt table in [spec.md §6](spec.md) lists most of it: outdated stacks, versions that aren't pinned, Python projects with no requirements files, and some folder names that don't match the rest. On top of that, from the September 27 security review: the two open Google API key alerts (Firebase configs in `superchat` and `crm-acc`) still need restricting in Google Cloud Console, and the bulk of the Dependabot backlog is knowingly left unfixed since these are local-only exercise projects.

### How did the work move over the years?
| Year | Commits | Main focus |
|---|---|---|
| 2026 | 20 | C#/C++ exercises, Python touch-ups, a dev container, AI-agent docs, a September security cleanup |
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
