/**
 * more info
 * https://orm.drizzle.team/docs/migrations
 */

import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL as string,
    authToken: process.env.TURSO_DATABASE_AUTH_TOKEN as string,
  },
} satisfies Config;
