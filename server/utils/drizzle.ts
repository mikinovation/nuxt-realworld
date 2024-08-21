import { drizzle } from 'drizzle-orm/node-postgres'
import pg from 'pg'
import * as schema from '../database/schema'

const { Pool } = pg

export { sql, eq, and, or } from 'drizzle-orm'
export const tables = schema

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'realworld',
  user: 'postgres',
  password: 'password',
})

export const useDrizzle = () => {
  return drizzle(pool)
}

export type User = typeof schema.users.$inferSelect
