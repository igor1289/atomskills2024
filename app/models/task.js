const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");
const Lesson = require("./lesson");

class Task extends Model
{

}

Task.init({
    code: {
        type: DataTypes.CHAR(32),
        allowNull: false
    },
    lesson_code: {
        type: DataTypes.CHAR(32),
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
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    topic_code: {
        type: DataTypes.CHAR(32),
        allowNull: false
    },
},
{
  sequelize,
})

Task.removeAttribute("id");

module.exports = Task