// TODO: Implement the handler for this event

import {tables} from "~~/server/utils/drizzle";

export default defineEventHandler(() => {
    const todos = await useDrizzle().select().from(tables.todos).all()

    return todos
})
