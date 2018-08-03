import * as Sequelize from 'sequelize'

export interface TodoAttributes {
  id?: number
  title?: string
  note?: string
}

export interface TodoInstance extends Sequelize.Instance<TodoAttributes> {
  id: number
  createdAt: Date
  updatedAt: Date
  title: string
  note: string
}

export default (sequelize: Sequelize.Sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING(255),
    note: DataTypes.TEXT(255),
   })
  Todo.associate =  models => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems'
    })
  }
  return Todo
}