import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'
// import { default as config } from '../config/config'
const env = process.env.NODE_ENV || 'development'
const config = require('../../../databaseconfig/config.json')[env]

// Import model specification from its own definition file.
import { AreaAttributes, AreaInstance } from './area'
import { TodoAttributes, TodoInstance } from './todo'
import { TodoItemAttributes, TodoItemInstance } from './todo_item'
// import { AppUserInstance, AppUserAttributes } from './appuser'

interface DbConnection {
  Todo: Sequelize.Model<TodoInstance, TodoAttributes>
  TodoItem: Sequelize.Model<TodoItemInstance, TodoItemAttributes>
  Area: Sequelize.Model<AreaInstance, AreaAttributes>
  // AppUser: Sequelize.Model<AppUserInstance, AppUserAttributes>
}

const db = {} as any

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable])
  : new Sequelize(config.database, config.username, config.password, config)

const basename = path.basename(module.filename)
fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && (file.slice(-3) === '.js' && file !== 'index.js')
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    // NOTE: you have to change from the original property notation to
    // index notation or tsc will complain about undefined property.
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db as DbConnection
