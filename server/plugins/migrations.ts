import {drizzle} from "drizzle-orm/postgres-js";
import {migrate} from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

export default defineNitroPlugin(async () => {
    if (!import.meta.dev) return

    const sql = postgres("...", {max: 1})
    const db = drizzle(sql);
    await migrate(db, {migrationsFolder: "drizzle"})
        .then(() => {
            console.info('Database migrations done')
        }).catch((err) => {
            console.error('Database migrations failed', err)
        })
    await sql.end();
})