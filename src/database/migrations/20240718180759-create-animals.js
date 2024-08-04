"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("animals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      earringId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weight: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      registerDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      vetHistoric: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "f",
      },
      pregnantState: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      raceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "races",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("animals");
  },
};
