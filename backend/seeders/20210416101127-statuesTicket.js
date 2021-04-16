'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Ticket_Statuses', [{
      status: "OPEN",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "IN PROGRESS",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "CLOSED",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ticket_Statuses', null, {});
  }
};
