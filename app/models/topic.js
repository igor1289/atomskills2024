const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");

class Topic extends Model
{

}

Topic.init({
    code: {
        type: DataTypes.CHAR(32),
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Topic