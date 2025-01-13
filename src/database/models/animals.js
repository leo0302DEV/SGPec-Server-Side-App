"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
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
      weight: DataTypes.STRING,
      registerDate: DataTypes.DATEONLY,
      sex: DataTypes.STRING,
      pregnantState: DataTypes.BOOLEAN,
      race: DataTypes.STRING,
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
