"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class AnimalVaccine extends Model {
    static associate(models) {
      AnimalVaccine.belongsTo(models.Animal, { foreignKey: "animalId" });
      AnimalVaccine.belongsTo(models.Vaccine, { foreignKey: "vaccineId" });
    }
  }
  AnimalVaccine.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      applicationDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "AnimalVaccine",
      tableName: "animalVaccines",
      paranoid: true,
    }
  );
  return AnimalVaccine;
};
