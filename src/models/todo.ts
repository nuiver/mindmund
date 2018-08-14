import * as Sequelize from 'sequelize'

export interface TodoAttributes {
  id?: number
  title?: string
  note?: string
  complete?: boolean
  deadline?: Date
  plannedDate?: Date
  createdAt?: Date
  updatedAt?: Date
  areaId?: number
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
    deadline: {
      type: Sequelize.DATE
    },
    plannedDate: {
      type: Sequelize.DATE
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    areaId: {
      defaultValue: null,
      type: Sequelize.INTEGER
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
    Todo.belongsTo(models.Area, {
      foreignKey: 'areaId',
      // as: 'areas'
    })
    Todo.belongsTo(models.Stage, {
      foreignKey: 'stageId',
      // as: 'areas'
    })
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems'
    })
  }
  return Todo
}
