import * as Sequelize from 'sequelize'

export interface TodoItemAttributes {
  id?: number
  content?: string
  complete?: boolean
  createdAt?: Date
  updatedAt?: Date
  todoId?: number
}

export type TodoItemInstance = Sequelize.Instance<TodoItemAttributes> & TodoItemAttributes

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<TodoItemAttributes> = {
    content: {
      defaultValue: '',
      type: Sequelize.STRING
    },
    complete: {
      defaultValue: false,
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      field: 'createdAt',
      type: Sequelize.DATE
    },
    updatedAt: {
      field: 'updatedAt',
      type: Sequelize.DATE
    }
  }

  const options = {
    name: {
      plural: 'todoitems',
      singular: 'todoitem'
    }
  }

  const TodoItem = sequelize.define<TodoItemInstance, TodoItemAttributes>('TodoItem', attributes, options)
  TodoItem.associate = models => {
    TodoItem.belongsTo(models.Todo, { as: 'TodoItem', foreignKey: 'todoId', onDelete: 'CASCADE' })
  }
  return TodoItem
}
