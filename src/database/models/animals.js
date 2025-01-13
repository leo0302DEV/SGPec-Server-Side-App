"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
      Animal.belongsTo(models.Race, {
        foreignKey: {
          name: "raceId",
          allowNull: false,
        },
      });

      Animal.hasMany(models.Note, {
        foreignKey: {
          name: "animalId",
        },
      });

      Animal.belongsToMany(models.Vaccine, {
        through: models.AnimalVaccine,
      });

      Animal.belongsToMany(models.Medicine, {
        through: models.AnimalMed,
      });
    }
  }

  Animal.init(
    {
      earringId: DataTypes.STRING,
      age: DataTypes.STRING,
      weight: DataTypes.NUMBER,
      registerDate: DataTypes.DATEONLY,
      sex: DataTypes.STRING,
      pregnantState: DataTypes.BOOLEAN,
      raceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Animal",
      tableName: "animals",
      paranoid: true,
    }
  );

  return Animal;
};
