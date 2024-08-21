import {drizzle} from 'drizzle-orm/d1'

export {sql, eq, and, or} from 'drizzle-orm'

import * as schema from '../database/schema'
import postgres from "postgres";

export const tables = schema

const sql = postgres("...", {
    max: 1
})

export const useDrizzle = () => {
    return drizzle(sql)
}

export type User = typeof schema.users.$inferSelect