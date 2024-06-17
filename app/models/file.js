const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");

class File extends Model
{

}

File.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = File