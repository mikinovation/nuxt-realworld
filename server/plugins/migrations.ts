import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { useDrizzle } from '~~/server/utils/drizzle'

export default defineNitroPlugin(async () => {
  if (!import.meta.dev) return

  await migrate(useDrizzle(), { migrationsFolder: './server/database/migrations' })
    .then(() => {
      console.info('Database migrations done')
    }).catch((err) => {
      console.error('Database migrations failed', err)
    })
})
