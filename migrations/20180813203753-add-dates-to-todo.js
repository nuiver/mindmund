'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('Todos', 'deadline', {
        allowNull: true,
        type: Sequelize.DATE,
        
      }),
      queryInterface.addColumn('Todos', 'plannedDate', {
        allowNull: true,
        type: Sequelize.DATE
      })
    ]
  },
  down: queryInterface => {
    return [queryInterface.removeColumn('Todos', 'deadline'), queryInterface.removeColumn('Todos', 'plannedDate')]
  }
}
