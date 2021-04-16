'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Tickets', // name of Source model
      'TicketActivityId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ticket_Activities', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    ).then(() => {
    return queryInterface.addColumn(
      'Tickets', // name of Source model
      'TicketLvlPriorityId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ticket_Levels_Priority', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    )})
    .then(() => {
      return queryInterface.addColumn(
        'Tickets', // name of Source model
        'TicketLvlPriorityId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Ticket_Levels_Priority', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
      )});
      .then(() => {
        return queryInterface.addColumn(
          'Tickets', // name of Source model
          'TicketLvlPriorityId', // name of the key we're adding 
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Ticket_Levels_Priority', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
        )})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Tickets', // name of Source model
      'TicketActivityId' // key we want to remove
    );
    await queryInterface.removeColumn(
      'Tickets', // name of Source model
      'TicketLvlPriorityId' // key we want to remove
    );

  }
};
