const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");

class Trait extends Model
{

}

Trait.init({
    code: {
        type: DataTypes.CHAR(32),
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
  sequelize,
})

module.exports = Trait