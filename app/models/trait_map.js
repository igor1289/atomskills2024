const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");

class TraitMap extends Model
{

}

TraitMap.init({
    trait_code: {
        type: DataTypes.CHAR(32),
        allowNull: true
    },
    owner_code: {
        type: DataTypes.CHAR(32),
        allowNull: true
    },
    owner_type: {
        type: DataTypes.CHAR(32),
        allowNull: true
    }
},
{
  sequelize,
})

module.exports = TraitMap
