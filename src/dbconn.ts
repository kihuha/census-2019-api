import { Pool } from "pg"

// const connectionString = `postgresql://${process.env.APP_DB_USER}:${process.env.APP_DB_PASSWORD}@${process.env.APP_DB_HOST}:5432/${process.env.APP_DB_NAME}`

const connObj = process.env.PRODUCTION
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    }
  : {
      user: process.env.APP_DB_USER,
      host: process.env.APP_DB_HOST,
      database: process.env.APP_DB_NAME,
      password: process.env.APP_DB_PASSWORD,
      port: 5432,
    }

const pool = new Pool(connObj)

export { pool }
