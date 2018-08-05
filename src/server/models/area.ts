import * as Sequelize from 'sequelize'

export interface AreaAttributes {
  id?: number
  areaName?: string
}

export interface AreaInstance extends Sequelize.Instance<AreaAttributes> {
  id: number
  createdAt: Date
  updatedAt: Date
  areaName: string
}

export default (sequelize: Sequelize.Sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
    areaName: DataTypes.STRING(255)
  })

  return Area
}
