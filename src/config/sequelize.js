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

let url

switch (env) {
  case 'production':
    url = process.env.DATABASE_URL // stored in heroku config vars
    break
  case 'testing':
    url = `postgres://${userTest}:${passwordTest}@${hostTest}:${portTest}/${databaseTest}`
    break
  case 'test_travis':
  case 'development':
    url = `postgres://${user}:${password}@${host}:${port}/${database}`
    break
  default:
    url = 'postgres://postgres:postgres@localhost:5432/default'
}
console.log(url)

// NOTE: sequelize cli environment config for migrations, etc...
// TODO: could probably just set all to {url} after above, need to test.
module.exports = {
  development: {
    database,
    dialect,
    host,
    port,
    url
  },
  production: {
    url
  },
  test_travis: {
    database,
    dialect,
    host,
    port
  },
  testing: {
    database,
    dialect,
    host,
    port,
    url
  }
}
