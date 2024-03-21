/**
 * more info
 * https://orm.drizzle.team/docs/get-started-sqlite#turso
 * https://orm.drizzle.team/docs/column-types/sqlite
 * https://orm.drizzle.team/docs/indexes-constraints
 */

import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  salt: text("salt").notNull(),
  hash: text("hash").notNull(),
  createdAt: integer("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: integer("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type usersType = typeof users.$inferSelect;
