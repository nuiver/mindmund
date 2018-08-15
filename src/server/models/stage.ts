import * as Sequelize from 'sequelize'

export interface StageAttributes {
  id?: number
  stageName?: string
  createdAt?: Date
  updatedAt?: Date
}

export type StageInstance = Sequelize.Instance<StageAttributes> & StageAttributes

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<StageAttributes> = {
    stageName: {
      defaultValue: '',
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  }

  const options = {
    name: {
      plural: 'stages',
      singular: 'stage'
    }
  }

  const Stage = sequelize.define<StageInstance, StageAttributes>('Stage', attributes, options)
  Stage.associate = models => {
    Stage.hasMany(models.Todo, {
      foreignKey: 'stageId',
    })
  }
  return Stage
}
