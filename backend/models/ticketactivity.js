'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket_Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ticket_Activity.hasMany(models.Ticket, {foreignKey: "idTicketActivity"})
    }
  };
  Ticket_Activity.init({
    activity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket_Activity',
  });
  return Ticket_Activity;
};