import pg from 'pg'

const { Pool } = pg
const { DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env

const config = {
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  allowExitOnIdle: true
}

const pool = new Pool(config)

// captura errores y envía query
const db = (query, values) => pool
  .query(query, values)
  .then(({ rows }) => rows)
  .catch((error) => error)

export default db
