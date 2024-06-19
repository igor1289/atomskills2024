const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");

class Result extends Model {}

Result.init({
  id: {
    type: DataTypes.CHAR(32),
    primaryKey: true,
    allowNull: false,
  },
  task_code: {
    type: DataTypes.CHAR(32),
    allowNull: false,
  },
  coment: {
    type: DataTypes.STRING(512),
    allowNull: false,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  teacher_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  score_id: {
    type: DataTypes.CHAR(32),
    allowNull: false,
  },
  status_id: {
    type: DataTypes.CHAR(32),
    allowNull: false,
  },
},
{
  sequelize
});

module.exports = Result;
