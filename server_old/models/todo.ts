import {Sequelize} from 'sequelize'

interface TodoAttributes {
  id?: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
}

type TodoInstance = Sequelize.Instance<TodoAttributes> & TodoAttributes

export default (sequalize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<TodoAttributes> = {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    title: { type: Sequelize.STRING, allowNull: false },
  }
  return sequalize.define<TodoInstance, TodoAttributes>('Product', attributes)
}