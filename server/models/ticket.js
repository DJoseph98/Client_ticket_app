'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ticket.belongsTo(models.Ticket_Activity, {foreignKey: 'id', target_key: 'ticketActivitesId'})
      Ticket.belongsTo(models.Ticket_Levels_Priority, {foreignKey: 'id', target_key: 'ticketLvlPriorId'})
      Ticket.belongsTo(models.Ticket_Status, {foreignKey: 'id', target_key: 'ticketStatusId'})
    }
  };
  Ticket.init({
    title: DataTypes.STRING,
    ticketNumber: DataTypes.UUID,
    email: DataTypes.STRING,
    problemDescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};