const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");
const Task = require("./task");

class Lesson extends Model
{

}

Lesson.init({
    code: {
        type: DataTypes.CHAR(32),
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    topic_code: {
        type: DataTypes.CHAR(32),
        allowNull: false
    }
},
{
  sequelize,
})

module.exports = Lesson