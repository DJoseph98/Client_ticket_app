'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tickets_Test', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ticketNumber: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      problemDescription: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      ticketStatusId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Ticket_Statuses',
          key: 'id'
        }
      },
      ticketLvlPriorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Ticket_Levels_Priority',
          key: 'id'
        }
      },
      ticketActivitesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Ticket_Activities',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tickets_Test');
  }
};