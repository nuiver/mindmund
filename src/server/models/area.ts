import * as Sequelize from 'sequelize'

export interface AreaAttributes {
  id?: number
  areaName?: string
  createdAt?: Date
  updatedAt?: Date
}

export type AreaInstance = Sequelize.Instance<AreaAttributes> & AreaAttributes

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<AreaAttributes> = {
    areaName: {
      defaultValue: '',
      type: Sequelize.STRING
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
      plural: 'areas',
      singular: 'area'
    }
  }

  const Area = sequelize.define<AreaInstance, AreaAttributes>('Area', attributes, options)
  Area.associate = models => {
    Area.hasMany(models.Todo, {
      foreignKey: 'areaId',
      // as: 'areas'
    })
  }
  return Area
}
