"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("animals", [
      {
        id: uuidv4(),
        earringId: "011",
        age: "12 a 24",
        weight: "356",
        registerDate: "2024-07-18",
        sex: "Fêmea",
        pregnantState: true,
        race: "Angus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        earringId: "098",
        age: "12 a 24",
        weight: "356",
        registerDate: "2024-07-18",
        sex: "Fêmea",
        pregnantState: true,
        race: "Nelore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        earringId: "065",
        age: "12 a 24",
        weight: "356",
        registerDate: "2024-07-18",
        sex: "Fêmea",
        pregnantState: true,
        race: "Nelore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        earringId: "078",
        age: "12 a 24",
        weight: "356",
        registerDate: "2024-07-18",
        sex: "Macho",
        pregnantState: false,
        race: "Nelore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        earringId: "035",
        age: "12 a 24",
        weight: "356",
        registerDate: "2024-07-18",
        sex: "Macho",
        pregnantState: false,
        race: "Nelore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("animals", null, {});
  },
};
