import { drizzle } from 'drizzle-orm/node-postgres'
import pg from 'pg'
import * as dotenv from 'dotenv'
import { name } from 'drizzle-orm'
import * as schema from './schema'

const { Pool } = pg

dotenv.config({ path: './.env' })

if (!('DATABASE_URL' in process.env))
  throw new Error('DATABASE_URL not found on .env')

type User = typeof schema.users.$inferSelect

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'test1@example.com',
    password: 'password',
    avatar: 'https://example.com/avatar1',
    createdAt: new Date(),
  },
]

const main = async () => {
  const client = new Pool({
    connectionString: process.env.DATABASE_URL,
  })
  const db = drizzle(client)

  console.log('Seed started')
  await db.insert(schema.users).values(users)
  console.log('Seed done')
}

main()
