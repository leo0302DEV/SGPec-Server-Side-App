"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class AnimalMed extends Model {
    static associate(models) {
      AnimalMed.belongsTo(models.Animal, { foreignKey: "animalId" });
      AnimalMed.belongsTo(models.AnimalMed, { foreignKey: "medicineId" });
    }
  }

  AnimalMed.init(
    {
      animalId: DataTypes.INTEGER,
      medicineId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AnimalMed",
      tableName: "animalMeds",
    }
  );

  return AnimalMed;
};
