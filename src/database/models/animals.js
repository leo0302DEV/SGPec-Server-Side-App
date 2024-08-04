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

      Animal.belongsToMany(models.Vaccine, {
        through: models.AnimalVaccine,
      });
    }
  }
  Animal.init(
    {
      earringId: DataTypes.STRING,
      age: DataTypes.STRING,
      weight: DataTypes.NUMBER,
      registerDate: DataTypes.DATEONLY,
      vetHistoric: DataTypes.STRING,
      sex: DataTypes.STRING,
      pregnantState: DataTypes.BOOLEAN,
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
