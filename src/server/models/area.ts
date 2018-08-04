import * as Sequelize from 'sequelize'

export interface AreaAttributes {
  id?: number
  area?: string
}

export interface AreaInstance extends Sequelize.Instance<AreaAttributes> {
  id: number
  createdAt: Date
  updatedAt: Date
  area: string
}

export default (sequelize: Sequelize.Sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
    area: DataTypes.STRING(255),
  })

  // Area.associate = models => {
  //   Area.belongsTo(models.Todo, { as: 'Area', foreignKey: 'todoId', onDelete: 'CASCADE' })
  // }

  return Area
}