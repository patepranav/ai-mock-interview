import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationClient = postgres(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL, {
  max: 1,
});

const migrateToDatabase = async () => {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "./migrations",
  });
  await migrationClient.end();
};

migrateToDatabase()
  .then(() => {
    console.log("Migration completed successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
