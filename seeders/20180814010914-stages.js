'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Stages',
      [
        {
          id: 1,
          stageName: 'Inbox',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          stageName: 'Active',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          stageName: 'Someday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          stageName: 'Trash',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stages', null, {})
  }
}
