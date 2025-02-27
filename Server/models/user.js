module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
      "user",
      {
        ...require("./common_columns")(Sequelize, DataTypes),
        
        name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        userName: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        phoneNumber: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        countryCode: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },

        deviceToken: {
          type: DataTypes.STRING(255),
          allowNull: true
      },
      deviceType: {
          type: DataTypes.STRING(255),
          allowNull: true
      },
      resetToken: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    resetTokenExipre: {
      type: DataTypes.DATE,
      allowNull: true
  },
        
      },
  
      {
        tableName: "user",
      }
    );
  };
  