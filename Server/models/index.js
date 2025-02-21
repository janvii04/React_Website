const Sequelize = require("sequelize");
const sequelize = require("../dbConnection").sequelize;

module.exports = {
  user: require("./user")(Sequelize, sequelize, Sequelize.DataTypes),
}
