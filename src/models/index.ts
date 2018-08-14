import Sequelize from 'sequelize'
import * as config from '../config/sequelize'

import Area from './area'
import Stage from './stage'
import Todo from './todo'
import TodoItem from './todoitem'
import User from './user'

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
  operatorsAliases,
  dialect: config[process.env.NODE_ENV].dialect
}

const sequelize: Sequelize.Sequelize = new Sequelize(config[process.env.NODE_ENV].url, options)

interface Model {
  [key: string]: any
}

const models: Model = {
  Todo: Todo(sequelize),
  TodoItem: TodoItem(sequelize),
  Area: Area(sequelize),
  Stage: Stage(sequelize),
  User: User(sequelize)
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
