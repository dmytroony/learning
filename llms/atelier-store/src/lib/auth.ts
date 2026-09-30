import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";

// Minimal Better Auth instance. No auth methods (email/password, OAuth, etc.)
// are enabled yet — add them here once the corresponding schema/tables exist
// (see src/db/schema.ts).
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
});
