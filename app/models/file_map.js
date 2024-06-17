const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");

class FileMap extends Model
{
    
}

FileMap.init({
    file_id: {
        type: DataTypes.INTEGER,
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
})