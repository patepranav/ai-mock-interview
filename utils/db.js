import { drizzle } from "drizzle-orm/postgres-js";
// import * as schema from "./schema";
// const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
// export const db = drizzle(sql, { schema });

import postgres from "postgres";

const connection = postgres(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL, {
  max: 20,
});

const db = drizzle(connection);

export default db;
