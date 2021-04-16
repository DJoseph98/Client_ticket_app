'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tickets', {
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
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      problemDescription: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      idTicketStatus: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {         
          model: 'Ticket_Statuses',
          key: 'id'
        }
      },
      idTicketLvl: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {         
          model: 'Ticket_Level_Priorities',
          key: 'id'
        }
      },
      idTicketActivity: {
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
    await queryInterface.dropTable('Tickets');
  }
};