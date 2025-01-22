"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    static associate(models) {
      Note.belongsTo(models.Animal, {
        foreignKey: {
          name: "animalId",
          allowNull: false,
        },
      });
    }
  }

  Note.init(
    {
      animalId: DataTypes.INTEGER,
      creationDate: DataTypes.DATEONLY,
      anotations: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Note",
      tableName: "notes",
    }
  );

  return Note;
};
