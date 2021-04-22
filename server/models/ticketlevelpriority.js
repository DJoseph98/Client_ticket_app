'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket_Level_Priority extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ticket_Level_Priority.hasMany(models.Ticket , {foreignKey:"ticketLvlPriorId"})
    }
  };
  Ticket_Level_Priority.init({
    levelPriority: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket_Level_Priority',
  });
  return Ticket_Level_Priority;
};