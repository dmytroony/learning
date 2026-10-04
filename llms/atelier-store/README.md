# atelier-store

Next.js e-commerce app scaffold — TypeScript, Tailwind CSS, Drizzle ORM on Neon Postgres, Better Auth. This is initial project structure and configuration only: no storefront UI, no schema/tables, no auth flows, no payments, no deployment setup yet.

## Details

### Architecture

A single Next.js 16 App Router application — no separate backend service. Server-side data access (DB, auth) runs inside Next.js route handlers; there's no client-side app shell or storefront UI yet, just the default `create-next-app` scaffold page.

### Technologies

- **Next.js 16** (App Router, Turbopack, React 19) — framework and server runtime
- **TypeScript** — strict mode, `@/*` import alias to `src/`
- **Tailwind CSS v4** (via `@tailwindcss/postcss`) — styling
- **Drizzle ORM** + **Drizzle Kit** — schema, queries, migrations
- **Neon serverless Postgres** (`@neondatabase/serverless`, HTTP driver) — database
- **Better Auth** (`better-auth`, Drizzle adapter) — authentication

### Main folders

- `src/app/` — App Router pages and routes (`layout.tsx`, `page.tsx`, `globals.css`)
- `src/app/api/auth/[...all]/route.ts` — catch-all API route that delegates to Better Auth
- `src/db/` — `index.ts` (Drizzle client) and `schema.ts` (tables — currently empty)
- `src/lib/` — `auth.ts` (Better Auth server instance)
- `drizzle.config.ts` — Drizzle Kit config (schema path, migrations output, DB credentials)
- `public/` — static assets from the default scaffold
- `.env.example` — required env vars (`DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`)

### How the pieces connect

1. `src/db/index.ts` opens a Neon HTTP connection from `DATABASE_URL` and wraps it with `drizzle()`, typed against `src/db/schema.ts`.
2. `src/lib/auth.ts` creates the `betterAuth()` instance and passes that same `db` through `drizzleAdapter(db, { provider: "pg" })`, so Better Auth persists users/sessions through Drizzle against the same schema.
3. `src/app/api/auth/[...all]/route.ts` exposes the `auth` instance's endpoints (sign-in, sign-out, session, etc.) as a Next.js catch-all route under `/api/auth/*`, via `toNextJsHandler(auth)`.
4. `src/app/layout.tsx` / `page.tsx` are still the unmodified `create-next-app` scaffold (Geist fonts, Tailwind demo page) — nothing on the client reads auth state or queries the database yet.

The chain (client → `/api/auth/*` → Better Auth → Drizzle → Neon) is wired end-to-end but unexercised: `schema.ts` is empty, so it has no tables (including Better Auth's own) until `pnpm dlx @better-auth/cli generate` is run and merged in, then migrated.

## Beginning Prompt

Set up a new next.js ecommerce app in this folder using ts, tailwind, better auth, drizzle orm, and postgres via neon. 
Only create the initial project structure, dependencies, configuration, env example and minimal integrations. 
Do not build ecommerce features, full auth flows, schemas, ui, payments or deployment.

## Start plan

The order this scaffold was built and verified in:

1. **Preflight** — confirmed `llms/atelier-store/` was empty, checked Node / npm available.
2. **Scaffold** — `create-next-app` with TypeScript, Tailwind, App Router, ESLint, `src/` dir, `@/*` import alias.
3. **Fix `.gitignore`** — generated `.env*` pattern would've also ignored `.env.example`; narrowed it to `.env` + `.env*.local`.
4. **Base install** — `npm install` for the Next.js deps (project later switched to pnpm; `pnpm-lock.yaml` is the lockfile).
5. **Add the stack** — installed `drizzle-orm`, `@neondatabase/serverless`, `better-auth` (deps); `drizzle-kit`, `dotenv` (devDeps).
6. **Check integration points** — confirmed `better-auth`'s `next-js` and `adapters/drizzle` subpath exports exist before wiring anything to them.
7. **Drizzle config + client** — `drizzle.config.ts`, `src/db/schema.ts` (empty placeholder), `src/db/index.ts` (Neon HTTP driver).
8. **Better Auth wiring** — `src/lib/auth.ts` (bare instance, no auth methods enabled), `src/app/api/auth/[...all]/route.ts` (required Next.js handler).
9. **Env + scripts** — `.env.example`, added `db:generate`/`migrate`/`push`/`studio` to `package.json`, pinned `engines.node`.
10. **Docs** — wrote this README (setup, structure, db workflow, explicit "not yet built" list).
11. **Verify** — `tsc --noEmit` (caught and fixed one real issue: empty `schema.ts` wasn't a valid module), `next build` once to generate `.next/types`, `eslint` — all clean.
12. **Smoke test** — ran `next dev`, curled `/` (200) and the auth routes (500 with the expected `SCHEMA_MISMATCH`, proving the chain is wired correctly), then cleaned up the throwaway `.env` and killed the server.

## Prerequisites

- Node.js ≥ 20 (developed against v24)
- [pnpm](https://pnpm.io) (package manager; do not use npm/yarn — the lockfile is `pnpm-lock.yaml`)
- A [Neon](https://neon.tech) Postgres database

## Setup

```bash
cp .env.example .env
# fill in DATABASE_URL (from Neon) and BETTER_AUTH_SECRET (pnpm dlx @better-auth/cli secret)

pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Serving the app

| Command | What it does |
|---|---|
| `pnpm dev` | Dev server with hot reload (Turbopack by default in Next.js 16). |
| `pnpm build` | Production build to `.next/`. |
| `pnpm start` | Serves the build made by `pnpm build`. Run build first. |
| `pnpm lint` | ESLint over the project. |

Useful options (pass directly, e.g. `pnpm dev -p 3100`):

- `-p, --port <port>` — port to listen on (default `3000`, or `$PORT`)
- `-H, --hostname <hostname>` — hostname to bind (default `0.0.0.0`)
- `--webpack` — use webpack instead of Turbopack for `dev` (Turbopack is the Next.js 16 default)
- `--experimental-https` — serve dev over HTTPS with a self-signed cert

`dev` and `start` both read `.env` on startup. Changing `DATABASE_URL` or `BETTER_AUTH_*` requires a restart.

## Project structure

- `src/app/` — Next.js App Router pages and routes
- `src/app/api/auth/[...all]/route.ts` — Better Auth's Next.js route handler
- `src/lib/auth.ts` — Better Auth server instance (no auth methods enabled yet)
- `src/db/index.ts` — Drizzle client, connected to Neon via `@neondatabase/serverless`
- `src/db/schema.ts` — Drizzle schema (currently empty)
- `drizzle.config.ts` — Drizzle Kit config (reads `DATABASE_URL`)

## Database

No tables exist yet. Once you add tables to `src/db/schema.ts` (including Better Auth's required tables — generate a starting point with `pnpm dlx @better-auth/cli generate`):

```bash
pnpm db:generate   # generate SQL migrations from schema.ts
pnpm db:migrate    # apply migrations to the database
pnpm db:push       # or: push schema directly, for prototyping
pnpm db:studio     # browse the database
```

## Not yet built

Storefront/ecommerce features, sign-in/sign-up UI and auth flows, product/order schemas, payments, and deployment config are all out of scope for this initial scaffold.
