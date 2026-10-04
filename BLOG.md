# Learning Blog

Notes on what has been built and learned in this repo. Newest posts on top, oldest at the bottom.

## Contents
- [2026-10 — Housekeeping: ignoring Claude's own clutter, plus a skills plugin](#2026-10--housekeeping-ignoring-claudes-own-clutter-plus-a-skills-plugin)
- [2026-09 — The state of the repo: an FAQ](#2026-09--the-state-of-the-repo-an-faq)

---

## 2026-10 — Housekeeping: ignoring Claude's own clutter, plus a skills plugin
*8 commits · tracks: docs, config, llms*

October opened with small follow-ups to September's dev-container and agent-tooling work, then added a third-party Claude Code skills plugin to the `llms/atelier-store/` scaffold, gave it a global design system, and moved it to pnpm.

- **2026-10-04 — ignore pnpm store (`505111f`):** root `.gitignore` gained three lines for the pnpm store.
- **2026-10-04 — atelier-store switched from npm to pnpm (`186246f`):** `package-lock.json` replaced by `pnpm-lock.yaml`, a new `pnpm-workspace.yaml` approves the `esbuild` and `unrs-resolver` build scripts, and [llms/atelier-store/.claude/settings.json](llms/atelier-store/.claude/settings.json) points Claude permissions at pnpm.
- **2026-10-03 — global design system for `llms/atelier-store/` (`2e7564c`):** Tailwind v4 tokens, base styles, layout primitives and component classes (buttons, links, header, hero, product card) were split into [llms/atelier-store/src/styles/](llms/atelier-store/src/styles/) (`tokens.css`, `base.css`, `primitives.css`, `components.css`) and imported from `globals.css`; the Geist fonts were swapped for Inter Tight and Cormorant Garamond in `layout.tsx`.
- **2026-10-03 — JavaScript-Mastery-Pro skills plugin added to `llms/atelier-store/` (`e77a980`):** nine Claude Code skills (`architect`, `audit`, `check`, `debug`, `develop`, `document`, `scope`, `sync`, `test`) were pulled in from the `JavaScript-Mastery-Pro/skills` GitHub repo under [llms/atelier-store/.claude/skills/](llms/atelier-store/.claude/skills/), each with its own `SKILL.md`, agent prompts, and mode/pattern reference docs, plus a `skills-lock.json` pinning each skill's source and content hash. These are process skills for spec-driven development (architecture decisions, codebase audits, review/verify gates, debugging, build checklists, docs templates, scope planning, skill-sync, and test setup) rather than application code — nothing in the storefront itself changed.
- **2026-10-02 — ignore local CLAUDE overrides (`81c17d2`):** `.gitignore` (root and `llms/atelier-store/.gitignore`) now also excludes `CLAUDE.local.md`, alongside the existing `.claude/worktrees/` rule.
- **2026-10-01 — ignore Claude Code worktrees (`ee4bed4`):** `.gitignore` gained `.claude/worktrees/`.
- **2026-10-01 — npm auto-update fix notes archived (`857f219`):** [instructions/npm-auto-update_fix.md](instructions/npm-auto-update_fix.md) records the session that diagnosed September's npm permission failures (`8850707`/`94b1806`): `@anthropic-ai/claude-code`'s files under the nvm-managed `node_modules` were owned by `root` from the base image build, while the container runs as `ubuntu` (uid 1000) with no `sudo`, so `claude doctor` warned that auto-update had no write permission. The note documents the root cause, the decision to fix ownership in this repo's own `Dockerfile` rather than the external base image, and a caveat that `~/.claude/projects/*.jsonl` session transcripts live on the container's writable layer (not the bind-mounted `/workspace`) and are lost on rebuild — hence writing the plan to a tracked file.

**Notable commits:** `505111f` chore: ignore pnpm store, `186246f` chore(atelier-store): switch from npm to pnpm, `2e7564c` feat(atelier-store): add global design system, `857f219` docs: archive npm auto-update fix session notes, `ee4bed4` claude worktrees ignoring, `81c17d2` local claude.md setts ignoring, `e77a980` Add JavaScript-Mastery-Pro skills plugin and lockfile

**Finished:** none — this month was tooling/config and scaffold styling only, no README learning-log entries closed.

---

## 2026-09 — The state of the repo: an FAQ
*679 commits · 2026-09-30 ← 2019-01-03*

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
- **2026-09-29 — container npm permissions and leaner docs:**
  - `8850707` and `94b1806` fix the same root-cause twice: the base image's global npm `node_modules` were owned by `root`, so `npm`/Claude Code self-update failed inside the container with no `sudo` available. The [Dockerfile](Dockerfile) first `chown`s just the installed Node version's `node_modules`, then a follow-up commit widens it to `chown -R 1000:1000 /usr/local/nvm/versions/node/*` (the whole nvm-managed Node prefix) to cover `npm`'s own files too.
  - `8850707` also fixes [CLAUDE.md](CLAUDE.md): it was missing the `java/` track and mislabeled `csharp/untitled` (actually a CMake C++ project), and it documents the new devcontainer.json workflow.
  - `847177f` stops [CLAUDE.md](CLAUDE.md) from eager-loading all of `spec.md` into every session (it used Claude Code's `@spec.md` import syntax instead of the intended "read on demand before refactoring" instruction), trims a directory listing and build-command mapping that's now derivable from `spec.md`, and moves the Docker dev-environment steps into a lazily-loaded `docker-dev-env` skill.
- **2026-09-30 — a second, successful attempt at the `llms/atelier-store/` scaffold** (`5bc1b40`, `0936e88`, `c6b37bb`), now that the dev container's memory cap is 6 GB: a Next.js 16 app (TypeScript, Tailwind v4, App Router, Turbopack) wired end-to-end to Drizzle ORM + Neon serverless Postgres and a bare Better Auth instance (no auth methods enabled, no schema tables, no storefront UI, no payments, no deployment config). The [README](llms/atelier-store/README.md) documents the architecture, the 12-step build/verify plan, and the "not yet built" scope; a `.env.example` lists the required `DATABASE_URL`/`BETTER_AUTH_SECRET`/`BETTER_AUTH_URL` vars.

### What's still open?
The technical-debt table in [spec.md §6](spec.md) lists most of what remains: outdated stacks, versions that aren't pinned, Python projects with no requirements files, and some folder names that don't match the rest. The September 27 security review closed out everything else — secret scanning alerts and Dependabot alerts are both at zero open.

### How did the work move over the years?
| Year | Commits | Main focus |
|---|---|---|
| 2026 | 36 | C#/C++ exercises, Python touch-ups, a dev container, AI-agent docs, a September security cleanup, container file-ownership and npm-permissions fixes, VS Code Dev Containers support, leaner docs, and a first `llms/` scaffold (Next.js + Drizzle + Neon + Better Auth) |
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
- **LLM/agent-built apps** — `llms/atelier-store/`, a Next.js + Drizzle + Neon + Better Auth ecommerce scaffold built with Claude Code: [llms/atelier-store/](llms/atelier-store/)

### Can I run everything from the root?
No. `cd` into a project folder and use its own manifest (`package.json`, `CMakeLists.txt`, `pubspec.yaml`, …). Older stacks (CRA 3, Vue CLI 4, Gatsby 2, node-sass) need an older Node version or `NODE_OPTIONS=--openssl-legacy-provider`.

### What is this repo?
A personal learning sandbox: many small, independent projects in one monorepo. Each project folder has its own tooling. Nothing is built from the repo root. See [spec.md](spec.md) for the full technical specification.
