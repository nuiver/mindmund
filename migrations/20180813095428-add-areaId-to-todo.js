'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'Todos',
        'areaId',
        {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Areas',
            key: 'id',
            as: 'areaId'
          }
        }
      )
    ];
  },
  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Todos', 'areaId')
    ];
  }
};
