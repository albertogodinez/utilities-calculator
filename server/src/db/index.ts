import { drizzle } from "drizzle-orm/postgres-js";

import env from "server/src/env";

import * as schema from "./schema";

const db = drizzle({
  connection: {
    url: env.DATABASE_URL,
    ssl: env.NODE_ENV !== "test",
  },
  casing: "snake_case",
  schema,
});

export default db;
