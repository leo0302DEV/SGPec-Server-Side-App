"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    static associate(models) {
      Race.hasMany(models.Animal, {
        foreignKey: {
          name: "raceId",
        },
      });
    }
  }
  Race.init(
    {
      raceName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Race",
      tableName: "races",
      paranoid: true,
    }
  );
  return Race;
};
