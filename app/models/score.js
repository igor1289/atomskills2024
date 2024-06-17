const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");

class Score extends Model {}

Score.init({
  id: {
    type: DataTypes.CHAR(32),
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
{
  sequelize
});

module.exports = Score;
