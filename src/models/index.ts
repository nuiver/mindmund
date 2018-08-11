import Sequelize from 'sequelize'
const env = process.env.NODE_ENV || 'development'
import * as config from '../config/sequelize'

import Todo from './todo'
import TodoItem from './todoitem'

const operatorsAliases: Sequelize.OperatorsAliases = {
  // NOTE: http://docs.sequelizejs.com/manual/tutorial/querying.html#operators-aliases
  $and: Sequelize.Op.and,
  $eq: Sequelize.Op.eq,
  $in: Sequelize.Op.in,
  $like: Sequelize.Op.like,
  $or: Sequelize.Op.or
}

const options: Sequelize.Options = {
  // NOTE: http://sequelize.readthedocs.io/en/latest/api/sequelize/index.html
  logging: false,
  operatorsAliases
  // dialect: 'postgres'
}
const sequelize: Sequelize.Sequelize = new Sequelize(config.url || process.env.DATABASE_URL, options)

interface Model {
  [key: string]: any
}

const models: Model = {
  Todo: Todo(sequelize),
  TodoItem: TodoItem(sequelize)
}

Object.keys(models).forEach(modelKey => {
  if ('associate' in models[modelKey]) {
    models[modelKey].associate(models)
  }
})

const db: any = {
  ...models,
  sequelize
}

module.exports = db
