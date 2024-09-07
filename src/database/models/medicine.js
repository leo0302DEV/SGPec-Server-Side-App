"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model {
    static associate(models) {
      Medicine.belongsToMany(models.Animal, {
        through: models.AnimalMed,
      });
    }
  }

  Medicine.init(
    {
      name: DataTypes.STRING,
      indication: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Medicine",
      tableName: "medicines",
    }
  );

  return Medicine;
};
