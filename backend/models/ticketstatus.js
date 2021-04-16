'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket_Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket_Status.hasMany(models.Ticket, {foreignKey: "idTicketStatus"})
    }
  };
  Ticket_Status.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket_Status',
  });
  return Ticket_Status;
};