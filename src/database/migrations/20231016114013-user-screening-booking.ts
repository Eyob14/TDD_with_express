import { Kysely, SqliteDatabase } from 'kysely'

export async function up(db: Kysely<SqliteDatabase>) {
  await db.schema
    .createTable('users')
    .ifNotExists()
    .addColumn('id', 'integer', (c) => c.primaryKey().autoIncrement().notNull())
    .addColumn('username', 'text', (c) => c.notNull())
    .addColumn('password', 'text', (c) => c.notNull())
    .addColumn('email', 'text', (c) => c.notNull().unique())
    .addColumn('role', 'text', (c) => c.notNull().defaultTo('user'))
    .execute()

  await db.schema
    .createTable('screenings')
    .ifNotExists()
    .addColumn('id', 'integer', (c) => c.primaryKey().autoIncrement().notNull())
    .addColumn('movie_id', 'integer', (c) =>
      c.notNull().references('movies.id')
    )
    .addColumn('timestamp', 'date', (c) => c.notNull())
    .addColumn('allocation', 'integer', (c) => c.notNull())
    .execute()

  await db.schema
    .createTable('bookings')
    .ifNotExists()
    .addColumn('id', 'integer', (c) => c.primaryKey().autoIncrement().notNull())
    .addColumn('screening_id', 'integer', (c) =>
      c.notNull().references('screenings.id')
    )
    .addColumn('user_id', 'integer', (c) =>
      c.notNull().references('users.id')
    )
    .execute()
}
