// TODO: Implement the handler for this event

import { tables, useDrizzle } from '~~/server/utils/drizzle'

export default defineEventHandler(async () => {
  return await useDrizzle().select().from(tables.users).all()
})
