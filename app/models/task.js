const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");

class Task extends Model
{

}

Task.init({
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
        type: DataTypes.STRING,
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
    lesson_code: {
        type: DataTypes.CHAR(32),
        allowNull: false
    }
})

module.exports = Task