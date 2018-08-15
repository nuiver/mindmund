const dotenv = require('dotenv')
dotenv.config()

const env = process.env.NODE_ENV
const port = process.env.DB_PORT
const database = process.env.DB_NAME
const user = process.env.DB_USER
const password = process.env.DB_PASS
const host = process.env.DB_HOST

const portTest = process.env.DB_TEST_PORT
const databaseTest = process.env.DB_TEST_NAME
const userTest = process.env.DB_TEST_USER
const passwordTest = process.env.DB_TEST_PASS
const hostTest = process.env.DB_TEST_HOST
const dialect = 'postgres'

const urlProd = process.env.DATABASE_URL || 'something'
const urlTesting = `postgres://${userTest}:${passwordTest}@${hostTest}:${portTest}/${databaseTest}`
const urlDev = `postgres://${user}:${password}@${host}:${port}/${database}`

module.exports = {
  development: {
    database,
    dialect,
    host,
    port,
    url: urlDev
  },
  production: {
    url: urlProd
  },
  testing: {
    database: databaseTest,
    dialect,
    host: hostTest,
    port: portTest,
    url: urlTesting,
    username: userTest,
    password: passwordTest
  }
}
