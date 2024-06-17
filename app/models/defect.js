const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");

class Defect extends Model {}

Defect.init({
  id: {
    type: DataTypes.CHAR(32),
    primaryKey: true,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  koordX: { type: DataTypes.INTEGER, allowNull: false },
  koordY: { type: DataTypes.INTEGER, allowNull: false },
  file_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Defect;
