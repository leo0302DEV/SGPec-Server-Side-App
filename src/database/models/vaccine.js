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
      dosesNum: DataTypes.INTEGER,
      seasonAplic: DataTypes.STRING,
      indicationAplic: DataTypes.STRING,
      notes: DataTypes.STRING,
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
