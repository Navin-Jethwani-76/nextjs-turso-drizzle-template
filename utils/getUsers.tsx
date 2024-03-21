import { db } from "@/db";
import { users } from "@/db/schema";
import { cache } from "react";

export const getUsers = cache(async () => {
  const Users = await db.select().from(users).all();
  return Users;
});
