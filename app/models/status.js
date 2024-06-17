const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");

class Status extends Model {}

Status.init({
  id: {
    type: DataTypes.CHAR(32),
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
});

module.exports = Status;
