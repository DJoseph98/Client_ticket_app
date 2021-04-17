'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket_Levels_Priority extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ticket_Levels_Priority.hasMany(models.Ticket , {foreignKey:"ticketLvlPriorId"})
    }
  };
  Ticket_Levels_Priority.init({
    levelPriority: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket_Levels_Priority',
  });
  return Ticket_Levels_Priority;
};