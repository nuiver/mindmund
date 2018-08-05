'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Areas', [
      {
        areaName: 'Persoonlijk', createdAt: new Date(), updatedAt: new Date()
      },
      {
        areaName: 'Huishouden', createdAt: new Date(), updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Areas', null, {});
  }
};
