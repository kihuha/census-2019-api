import { Pool } from "pg"

const pool = new Pool({
  user: process.env.APP_DB_USER,
  host: process.env.APP_DB_HOST,
  database: process.env.APP_DB_NAME,
  password: process.env.APP_DB_PASSWORD,
  port: 5432,
})

export { pool }
