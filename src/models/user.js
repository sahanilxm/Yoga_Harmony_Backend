'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    age: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    batch: {
      type : DataTypes.STRING,
      allowNull : false
    },
    email : {
      type : DataTypes.STRING,
      allowNull : false
    },
    password : {
      type : DataTypes.STRING,
      allowNull : false
    },
    payment_status: {
      type : DataTypes.STRING,
      defaultValue : "NOT_PAID"
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};