module.exports = (Sequelize, sequelize, DataTypes) => {
  return sequelize.define(
      "user",
      {
          ...require("./common_columns")(Sequelize, DataTypes),
          name: {
              type: DataTypes.STRING(255),
              allowNull: true,
              defaultValue: null,
          },
          userName: {
              type: DataTypes.STRING(255),
              allowNull: true,
              defaultValue: null,
          },
          phoneNumber: {
              type: DataTypes.STRING(255),
              allowNull: true,
              defaultValue: null,
          },
          countryCode: {
              type: DataTypes.STRING(255),
              allowNull: true,
              defaultValue: null,
          },
          email: {
              type: DataTypes.STRING(255),
              allowNull: true,
              defaultValue: null,
          },
          password: {
              type: DataTypes.STRING(255),
              allowNull: true,
              defaultValue: null,
          },
          resetToken: {
              type: DataTypes.STRING(255),
              allowNull: true,
              defaultValue: null,
          },
          resetTokenExpires: {
              type: DataTypes.DATE,
              allowNull: true,
              defaultValue: null,
          },
          deviceToken: {
              type: DataTypes.STRING(255),
              allowNull: true,
              defaultValue: null,
          },
          deviceType: {
              type: DataTypes.STRING(255),
              allowNull: true,
              defaultValue: null,
          },
      },
      {
          tableName: "user",
      }
  );
};
