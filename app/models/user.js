const { Model, DataTypes } = require("sequelize");
const sequelize = require("../common/sequelize");
const bcrypt = require("bcrypt");

class User extends Model {
  async setPassword(password) {
    try {
      this.password = await bcrypt.hash(
        password,
        parseInt(process.env.SALT_ROUNDS)
      );
      console.log(this.password);
    } catch (error) {
      console.log(error);
    }
  }

  async verifyPassword(password) {
    try {
      return bcrypt.compare(password, this.password);
    } catch (error) {
      console.log(error);
    }
  }

  getPayload() {
    return {
      id: this.id,
      name: this.name,
    };
  }

  getFullName()
  {
    return `${this.firstName} ${this.lastName} ${this.fatherName}`;
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isTeacher: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    firstName: { type: DataTypes.STRING(256), allowNull: false },
    lastName: { type: DataTypes.STRING(256), allowNull: false },
    fatherName: { type: DataTypes.STRING(256), allowNull: false },
    email: { type: DataTypes.STRING(256), allowNull: false },
    tel: { type: DataTypes.STRING(256), allowNull: false },
  },
  {
    sequelize,
  }
);

module.exports = User;
