import * as Sequelize from 'sequelize'

export interface TodoItemAttributes {
  id?: number
  content?: string
  complete?: boolean
  todoId?: number
}

export interface TodoItemInstance extends Sequelize.Instance<TodoItemAttributes> {
  id: number
  createdAt: Date
  updatedAt: Date
  content: string
  complete: boolean
  todoId: number
}

export default (sequelize: Sequelize.Sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: DataTypes.STRING(255),
    todoId: DataTypes.INTEGER,
    complete: DataTypes.BOOLEAN
  })

  TodoItem.associate = models => {
    TodoItem.belongsTo(models.Todo, { as: 'TodoItem', foreignKey: 'todoId', onDelete: 'CASCADE' })
  }

  return TodoItem
}