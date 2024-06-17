const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");
const path = require("path");
const {v4: uuidv4} = require("uuid");

const storagePath = 'app/storage';

class File extends Model
{
    async setStoragePath()
    {
        const extname = path.extname(this.name);
        const uuid = uuidv4();
        this.path = uuid + extname;
    }

    getFullPath()
    {
        return path.resolve(storagePath + "/" + this.path);
    }
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
    },
    title: {
        type: DataTypes.STRING
    }
},
{
  sequelize,
})

module.exports = File