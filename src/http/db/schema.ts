 import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core"

 export const goals = pgTable('goals', {
    id: text('id').primaryKey(),
    tittle: text('tittle').notNull(),
    desiredWeeklyFrequency: integer('desired_weekly_frequency').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
    
 })
    
 