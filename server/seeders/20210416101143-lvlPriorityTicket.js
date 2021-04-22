'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Ticket_Level_Priorities', [
      {
        levelPriority: "Blocker",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        levelPriority: "Critical",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        levelPriority: "High",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        levelPriority: "Normal",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        levelPriority: "Low",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ticket_Level_Priorities', null, {});
  }
};
