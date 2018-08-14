'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('Todos', 'stageId', {
        type: Sequelize.INTEGER,
        // onDelete: 'CASCADE',
        references: {
          model: 'Stages',
          key: 'id',
          as: 'stageId'
        }
      })
    ]
  },
  down: queryInterface => {
    return [queryInterface.removeColumn('Todos', 'stageId')]
  }
}
