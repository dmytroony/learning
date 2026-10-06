# Technical Specification — `learning` repository

This is the baseline technical specification for the `learning` repository. 
It records what the repo contains, how it is organized, 
which toolchains it depends on, and the rules for changing it. 
Use it as the starting point for any new work, 
refactoring, or tooling in this repo.

---

## 1. Purpose and scope

| Item | Description |
|---|---|
| Type | Personal, multi-language learning and sandbox **monorepo** |
| Owner | d20 (dm.onysko@gmail.com) |
| History | ~650 commits, first commit 2019-01-03, active through 2025 |
| Default branch | `master` |
| Nature of code | Course exercises, book homework, tutorial follow-alongs, small standalone apps |

**It is not a single application.** It has no shared runtime, no shared dependencies, 
and no root-level build, lint, or test pipeline. 
Each project folder is independent and brings its own tooling.

### Goals
- Keep learning material in one versioned place, organized by language or framework track.
- Let any sub-project be built and run on its own, in isolation.
- Provide a reproducible containerized shell (Docker) for working across tracks.

### Non-goals
- A unified build system or dependency graph across projects.
- Shared code or libraries between tracks.
- Production-grade quality, test coverage, or security hardening of exercise code.

---

## 2. Repository layout

```
/ (repo root)
├── CLAUDE.md, README.md, spec.md   # docs
├── index.html                      # static landing page linking selected exercises
├── Dockerfile, docker-compose.yml  # dev container
├── .gitignore, .idea/, .vscode/    # editor/ignore config
│
├── javascript/        # main JS track (books, ECMAScript, TS, frameworks)
├── js/                # script for root index.html
├── css/ sass/ scss/   # styles for root index.html + preprocessor exercises
├── ds-s_and_algs/     # data structures & algorithms (dss.js)
├── layouts/           # HTML/CSS layout exercises (FCC, Bootstrap)
├── projects/          # larger self-contained projects
├── python/            # Python scripts and a pygame game
├── java/              # IntelliJ console apps
├── cpp/ clang/ csharp/ dart/ php/   # small compiled/other-language exercises
├── flutter/           # two Flutter apps
└── docker/            # Docker crash-course exercise
```

### 2.1 Root files

| File | Role |
|---|---|
| `index.html` | Static "My learning process" page. Loads `css/style.css`, `css/style2.css`, `js/script.js` and links to highlighted exercises. |
| `README.md` | Learning log: courses and books completed, with dates and folder pointers. |
| `CLAUDE.md` | Guidance for AI coding agents working in this repo. |
| `Dockerfile` / `docker-compose.yml` | Generic dev container (see §4). |

---

## 3. Project inventory

Stack and run commands below come from each project's manifest. "Static" means open the HTML file in a browser, or serve it with any static server.

### 3.1 JavaScript / TypeScript — `javascript/`

| Path | Stack | Entry / commands |
|---|---|---|
| `books/CodeForTeens`, `books/JsOnExamples`, `books/EloquentJavascript` | Vanilla JS, HTML | Static |
| `ecmascript/crash2022` | JS + ESLint (airbnb, wesbos, TS parser) + Prettier | `npm run lint`, `npm run lint:fix` |
| `ecmascript/jsdeepdive` | ESM JS, ESLint airbnb, nodemon | `npm run lint` |
| `ecmascript/js2025`, `ecmascript/dka`, `ecmascript/js` | Vanilla JS (`js2025` has `qodana.yaml`) | Static / `node <file>` |
| `blockchain/b-chain_1` | Node, no deps | `node Block.js` |
| `jqueryLearn` | jQuery + Slick carousel | Static |
| `typescript_learn` | TS sources with compiled `.js` + `.map` checked in | `tsc` per file |
| `typescript/practical-ts` | TypeScript 5 + Vite 5 | `npm run dev`, `npm run build` |
| `typescript/ts_basics` | TypeScript | `tsc` |
| `frameworks/bun/bunqstart` | Bun + TS, figlet | `bun run index.ts` |
| `frameworks/deno/denoqstart` | Deno, `$std@0.221.0` import map | `deno run …` |
| `frameworks/express` | Express 4 | `node index.js` |
| `frameworks/nodejs/bmac` | Express 4, EJS, Helmet, Axios, dotenv | `npm run dev` / `npm start` |
| `frameworks/nodejs/lesson-by-vm` | Node + chalk | `npm run dev` / `npm start` |
| `frameworks/nodejs/node2024` | ESM Node, `--env-file=.env` | `npm run dev` / `npm start` (needs Node ≥ 20.6) |
| `frameworks/lynxjs/gallery` | Lynx (`@lynx-js/react`, rspeedy), TS 5.7 | `npm run dev` / `build` / `preview` |
| `frameworks/react/my1app`, `site2app`, `todo3app`, `todo4app` | CRA 3.4 (`react-scripts@3.4.3`), React 16, Bootstrap 4, React Router 5 | `npm start` |
| `frameworks/react/thinkinreact`, `ttt` | CRA 5, React 18 | `npm start` |
| `frameworks/react/learnreact18` | Next.js (`latest`), React 18.2 | `npm run dev` |
| `frameworks/react/react-next13` | Next 13 notes (package.json has no scripts) | — |
| `frameworks/vue/crash-course` | Vue 2.6 + Vue CLI 4.5, vue-router 3 | `npm run serve` |
| `frameworks/vue/qs_vue` | Vue 3.5 + Vite 6, Pinia 3, Vitest, Playwright, ESLint 9, oxlint, Prettier | `npm run dev`, `test:unit`, `test:e2e`, `lint`, `format` |

### 3.2 Projects — `projects/`

| Path | Stack | Entry / commands | Hosting |
|---|---|---|---|
| `JavaScript30/<day>` (28 folders) | Vanilla JS/HTML/CSS | Static; `geolocation`, `speechDetection`, `webcamFun` use `browser-sync` (`npm start`) | Some have Firebase Hosting config |
| `React/bug-tracker` | CRA 3.4, React 16, Redux Toolkit | `npm start` | — |
| `React/gh-jobs-api-app` | CRA 3.4, React Bootstrap, Axios, react-markdown | `npm start` | Firebase |
| `React/superchat` | CRA 3.4, Firebase 7, react-firebase-hooks | `npm start` | — |
| `React/blog1_gatsby/gatsby-london` | Gatsby 2, remark, PostCSS, Netlify plugin | `npm run develop` | Netlify |
| `vue-apps/crm-acc` | Vue 2 + Vue CLI 4.5 (PWA, Router, Vuex), Firebase 7, Materialize, Vuelidate, node-sass | `npm run serve` | — (reads `VUE_APP_FIXER` from `.env`) |
| `fullstack/node-stack/todo-fullstack-app` | Express 4, express-handlebars, Mongoose 5 (MongoDB) | `npm run dev` | — |
| `fullstack/vue-node/contacts-app` | Express 4 API + Vue front end, uuid | `npm run dev` | — |
| `html_css_js/postman-vanilla_js` | Vanilla JS, Snowpack 3, CodeMirror 6, Bootstrap 5, Axios | `npm start` | — |
| `html_css_js/discord_bots/mrbean` | discord.js 12, twit, dotenv | `npm run dev` | — |
| `html_css_js/{apple_replica, calculator, jscalc, devsportfolio_1, devsportfolio_2-aws, masks_filters, realtime-face-detection, the-rosa_responsive}` | Static HTML/CSS/JS | Static | Most use Firebase Hosting |
| `Bootstrap4/portfolio_1`, `portfolio_2` | Bootstrap 4 (vendored libs in `vendor/`) | Static | `portfolio_1` on Firebase |
| `bootstrap5/exampesite1` | Bootstrap 5 | Static | — |
| `materialize-css-v1/learncodeonline-crashcourse` | Materialize CSS 1 | Static | — |

### 3.3 Markup and styling

| Path | Content |
|---|---|
| `css/`, `js/` | Assets for the root `index.html` |
| `sass/`, `scss/` | Preprocessor exercises (`mixins.scss`, `variables.scss`, compiled `style2.css`) |
| `layouts/FCC_Responsive_WebDesign_Projects` | freeCodeCamp `survery_form`, `tribute_page` |
| `layouts/bootstrap-5`, `layouts/bootstrap_learn` | Bootstrap layout practice |
| `php/index.php` | Single PHP page |

### 3.4 Python — `python/`

| Path | Stack | Run |
|---|---|---|
| `code-basics/script.py` | Plain Python | `python script.py` |
| `pythonworld/start.py` | Plain Python | `python start.py` |
| `hackingchallenge/` | `requests`, Flask. Packages: `generators/`, `requesters/`, `scripts/` | `python hack.py` (local brute-force exercise against its own Flask server) |
| `Super-Pirate-World/` | `pygame`, `pytmx`. Code in `code/` (`main.py`, `level.py`, `player.py`, `sprites.py`, …). Assets in `graphics/`, `audio/`, `data/` (Tiled `.tmx` maps) | `cd code && python main.py` |

No project has a `requirements.txt` or `pyproject.toml`. Install dependencies by hand (`pip install pygame pytmx requests flask`) inside a venv; `*venv/` is gitignored.

### 3.5 Compiled and other languages

| Path | Language | Build |
|---|---|---|
| `clang/c_hello` | C | `gcc hello.c -o hello` |
| `cpp/` | C++14 | `CMakeLists.txt` builds `myfirstprogram.cpp`: `cmake -B build && cmake --build build` |
| `cpp/CSC1180` | C++ | `g++ hello.cpp` |
| `csharp/ConsoleAppFirstApp` | C# / .NET Framework 4.7.2 (old-style `.csproj`, `.sln`) | Visual Studio / `msbuild` (Windows). Not a `dotnet` SDK-style project. |
| `csharp/untitled` | C++17 (CLion project, despite the folder name) | CMake |
| `java/{cl_app, clapp_bdate, clapp_contacts, clapp_translator}` | Java console apps, IntelliJ modules (`.iml`), sources under `src/com/...` | IntelliJ, or `javac` + `java` by hand. No Maven or Gradle. |
| `dart/firststeps/main.dart` | Dart | `dart run main.dart` |
| `flutter/helloworld`, `flutter/myapp` | Flutter, Dart SDK `>=2.7.0 <3.0.0` (`helloworld` adds `http`) | `flutter pub get && flutter run`. Needs migration before it will build with Dart 3 / null safety. |

### 3.6 Docker exercise — `docker/docker_crash/`

| File | Purpose |
|---|---|
| `Dockerfile` | `node:latest`; copies `src/` and runs `node server.js` |
| `mongo-services.yaml` | Compose file for `mongo` (27017) and `mongo-express` (8081) |
| `my_app/Dockerfile` | `node:20-alpine`; app lives in `/home/app` |
| `my_app/docker-compose.yaml` | `my-app` (3000) + `mongodb` + `mongo-express` |
| `my_app/app/package.json` | Express 4, body-parser, mongodb driver 4 |

Credentials in these files (`admin` / `supersecret`) are tutorial placeholders for local use only.

---

## 4. Development environment

### 4.1 Dev container
```yaml
# docker-compose.yml
services:
  learning-env:
    build: .                       # Dockerfile: FROM local-ubuntu-base:24.04
    container_name: learning-env
    mem_limit: 6g                  # hard cap: leaking processes are OOM-killed
    memswap_limit: 6g              # equal to mem_limit, so no swap
    volumes: [ ".:/workspace:rw" ]
```
- The base image `local-ubuntu-base:24.04` is **not pulled from a registry**. It must already exist on the host.
- The container runs `tail -f /dev/null` to stay alive. It is a shell environment, not an app runner.
- Rollback plan for returning to this container after the WSL migration: `ROLLBACK.md` (git tag `docker-env-baseline`).

```bash
docker-compose up -d --build
docker exec -it learning-env bash
```

### 4.2 Toolchains observed in the container

| Tool | Version | Status |
|---|---|---|
| Node.js (via nvm) | v24.19.0 | available |
| Python | 3.12.3 | available |
| .NET SDK | 8.0 | available (cannot build the .NET Framework 4.7.2 project) |
| Java (OpenJDK) | 21 | available |
| Flutter / Dart, Deno, Bun, CMake | — | **not installed** |

Older projects pin tooling that clashes with modern Node:
- CRA 3.4 (`react-scripts@3.4.3`), Vue CLI 4.5, Gatsby 2, and Snowpack 3 need `NODE_OPTIONS=--openssl-legacy-provider` or an older Node (14 or 16).
- `node-sass@4` (`todo4app`, `crm-acc`) only builds on Node ≤ 14. Switch to `sass` to modernize.

### 4.3 Editors
- `.idea/` (JetBrains, repo-wide) and per-project `.iml` files are present.
- `.vscode/mcp.json` holds MCP server configuration.
- Both `.idea` and `.vscode/` are listed in `.gitignore`, but some files were committed before those rules were added.

---

## 5. Conventions and rules

1. **Isolation.** Every project is self-contained. `cd` into its folder before running `npm install`, `flutter pub get`, `cmake`, and so on. Never add a root-level `package.json`, workspace config, or shared dependencies.
2. **Scoped changes.** A change should touch only one project folder. Conventions from one track (lint rules, formatting) do not carry over to another.
3. **Placement of new work:**
   - Language fundamentals go in the matching language folder (`python/`, `java/`, `cpp/`, …).
   - Framework tutorials go in `javascript/frameworks/<framework>/<name>/`.
   - Larger standalone apps go in `projects/<category>/<name>/`.
   - Each new project gets its own manifest (`package.json`, `pubspec.yaml`, `CMakeLists.txt`, `requirements.txt`, …) and, ideally, a short `README.md` with its run command.
4. **Generated artifacts.** `out/`, `cmake-build-debug/`, `.vs/`, `__pycache__/`, `*.pyc`, `*.exe`, `*.o`, extensionless binaries (e.g. `clang/c_hello/hello`), and compiled TS output (`typescript_learn/*.js`, `*.js.map`) are build output. Do not hand-edit them. Do not add new ones.
5. **Dependencies.** Commit lockfiles where they exist. Never commit `node_modules/`.
6. **Secrets.** Use `.env` files for keys and keep them untracked. Commit only `.env.example`.
7. **Learning log.** When a course or book is finished, add an entry to `README.md` (dates plus folder path). Link notable results from `index.html` if they are worth showcasing.

---

## 6. Known issues and technical debt

| # | Issue | Location | Suggested action |
|---|---|---|---|
| 1 | `node_modules/` committed (~4,100 files) | `projects/JavaScript30/geolocation/` | `git rm -r --cached` it and add `node_modules/` to `.gitignore` |
| 2 | ~~`.env` with an API key (`VUE_APP_FIXER`) is tracked~~ **Resolved 2026-09-27** | `projects/vue-apps/crm-acc/.env` | Done: file untracked, `.env.example` added, old key revoked and new key regenerated on fixer.io. The new key lives only in the fixer.io dashboard (not in the repo); copy it into the local untracked `.env` when needed. |
| 3 | Build artifacts tracked | `cpp/*.exe`, `cpp/*.o`, `clang/c_hello/hello`, `java/*/out/`, `csharp/*/.vs`, `python/**/__pycache__` | Untrack them and extend `.gitignore` |
| 4 | No root rule for `node_modules/`, `__pycache__/`, `*.pyc`, `out/`, `dist/`, `build/`, `.env` | `.gitignore` | Add the global patterns |
| 5 | Python projects have no dependency manifest | `python/*` | Add `requirements.txt` per project |
| 6 | Outdated stacks (CRA 3, Vue 2, Gatsby 2, Snowpack, node-sass, discord.js 12, Firebase 7, Dart <3) | see §3 | Treat as frozen. Migrate only when the project is revived. |
| 7 | Floating versions (`next@latest`, `node:latest`, `mongo:latest`) make builds non-reproducible | `learnreact18`, `docker_crash` | Pin versions |
| 8 | Mixed folder naming (`ds-s_and_algs`, `exampesite1`, `survery_form`, `cl_app_cerate.iml`) | various | Leave as is (renaming breaks history and links) unless it is part of a planned cleanup |
| 9 | `java/` track and `csharp/untitled` (actually C++) are missing from `CLAUDE.md` | `CLAUDE.md` | Update the docs |
| 10 | `javascript/frameworks/react/ttt` lists `react-scripts` in both deps (`^5`) and devDeps (`1.0.0`), and has a nested `src/package.json` | `ttt/` | Clean up the manifest |
| 11 | ~~GitHub secret scanning alert #3 (MongoDB Atlas URI with credentials)~~ **Solved 2026-09-27** | `projects/fullstack/node-stack/todo-fullstack-app/index.js` (git history) | Done: password changed in Atlas, old host `cluster0.ot80v` no longer resolves, URI moved to untracked `.env` (`942b044`), alert #3 closed as "revoked". |
| 12 | ~~GitHub secret scanning alerts #1 and #2 (Google API keys, Firebase web config)~~ **Solved 2026-09-27** | `projects/React/superchat/src/App.js:13`, `projects/vue-apps/crm-acc/src/main.js:21` | Done: superchat key already invalid (project `superchat-44c57` gone), alert #1 closed as "revoked". crm-acc key restricted in Google Cloud (`vue-crm-acc`): referrers `vue-crm-acc.firebaseapp.com`, `vue-crm-acc.web.app`, `localhost:8080`; APIs Identity Toolkit, Token Service, Realtime Database. Other referrers verified blocked; alert #2 closed as "won't fix" (public web key by design). |

---

## 7. Adding a new project: checklist

- [ ] Folder created in the right track (see §5.3), in lowercase kebab-case.
- [ ] Own manifest and lockfile. No reliance on root-level tooling.
- [ ] `README.md` with a one-line purpose, prerequisites (runtime version), and run/build/test commands.
- [ ] `.gitignore` covers `node_modules/`, build output, and `.env`.
- [ ] Secrets only in untracked `.env`. `.env.example` committed.
- [ ] Runtime versions pinned (e.g. `engines` in `package.json`, `.nvmrc`, Docker image tags).
- [ ] Entry added to the root `README.md` learning log if it is part of a course or book.
