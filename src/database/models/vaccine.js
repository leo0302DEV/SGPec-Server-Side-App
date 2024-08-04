"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Vaccine extends Model {
    static associate(models) {
      Vaccine.belongsToMany(models.Animal, {
        through: models.AnimalVaccine,
      });
    }
  }
  Vaccine.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Vaccine",
      tableName: "vaccines",
      paranoid: true,
    }
  );
  return Vaccine;
};
