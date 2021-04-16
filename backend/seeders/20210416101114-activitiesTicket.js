'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Ticket_Activities', [{
      activity: "confirmed",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      activity: "rejected",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ticket_Activities', null, {});
  }
};
