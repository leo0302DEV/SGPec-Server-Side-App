"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("animalVaccines", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      animalId: {
        type: Sequelize.INTEGER,
        references: {
          model: "animals",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      vaccineId: {
        type: Sequelize.INTEGER,
        references: {
          model: "vaccines",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      applicationDate: {
        type: Sequelize.DATEONLY,
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
    await queryInterface.dropTable("animalVaccines");
  },
};
