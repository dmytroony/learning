# atelier-store

Next.js e-commerce app scaffold — TypeScript, Tailwind CSS, Drizzle ORM on Neon Postgres, Better Auth. This is initial project structure and configuration only: no storefront UI, no schema/tables, no auth flows, no payments, no deployment setup yet.

## Beginning Prompt

Set up a new next.js ecommerce app in this folder using ts, tailwind, better auth, drizzle orm, and postgres via neon. 
Only create the initial project structure, dependencies, configuration, env example and minimal integrations. 
Do not build ecommerce features, full auth flows, schemas, ui, payments or deployment.

## Start plan

The order this scaffold was built and verified in:

1. **Preflight** — confirmed `llms/atelier-store/` was empty, checked Node / npm available.
2. **Scaffold** — `create-next-app` with TypeScript, Tailwind, App Router, ESLint, `src/` dir, `@/*` import alias.
3. **Fix `.gitignore`** — generated `.env*` pattern would've also ignored `.env.example`; narrowed it to `.env` + `.env*.local`.
4. **Base install** — `npm install` for the Next.js deps.
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
- A [Neon](https://neon.tech) Postgres database

## Setup

```bash
cp .env.example .env
# fill in DATABASE_URL (from Neon) and BETTER_AUTH_SECRET (npx @better-auth/cli secret)

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Serving the app

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload (Turbopack by default in Next.js 16). |
| `npm run build` | Production build to `.next/`. |
| `npm run start` | Serves the build made by `npm run build`. Run build first. |
| `npm run lint` | ESLint over the project. |

Useful options (pass after `--`, e.g. `npm run dev -- -p 3100`):

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

No tables exist yet. Once you add tables to `src/db/schema.ts` (including Better Auth's required tables — generate a starting point with `npx @better-auth/cli generate`):

```bash
npm run db:generate   # generate SQL migrations from schema.ts
npm run db:migrate    # apply migrations to the database
npm run db:push       # or: push schema directly, for prototyping
npm run db:studio     # browse the database
```

## Not yet built

Storefront/ecommerce features, sign-in/sign-up UI and auth flows, product/order schemas, payments, and deployment config are all out of scope for this initial scaffold.
