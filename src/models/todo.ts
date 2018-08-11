import * as Sequelize from 'sequelize'

export interface TodoAttributes {
  id?: number
  title?: string
  note?: string
  complete?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type TodoInstance = Sequelize.Instance<TodoAttributes> & TodoAttributes

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<TodoAttributes> = {
    title: {
      defaultValue: '',
      type: Sequelize.STRING
    },
    note: {
      defaultValue: '',
      type: Sequelize.TEXT
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
      plural: 'todos',
      singular: 'todo'
    }
  }

  const Todo = sequelize.define<TodoInstance, TodoAttributes>('Todo', attributes, options)
  Todo.associate = models => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems'
    })
  }
  return Todo
}
