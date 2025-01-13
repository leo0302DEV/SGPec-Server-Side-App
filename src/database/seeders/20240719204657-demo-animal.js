"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("animals", [
      {
        earringId: "011",
        age: "12 a 24",
        weight: 356,
        registerDate: "2024-07-18",
        sex: "Fêmea",
        pregnantState: true,
        raceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        earringId: "098",
        age: "12 a 24",
        weight: 356,
        registerDate: "2024-07-18",
        sex: "Fêmea",
        pregnantState: true,
        raceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        earringId: "065",
        age: "12 a 24",
        weight: 356,
        registerDate: "2024-07-18",
        sex: "Fêmea",
        pregnantState: true,
        raceId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        earringId: "078",
        age: "12 a 24",
        weight: 356,
        registerDate: "2024-07-18",
        sex: "Macho",
        pregnantState: false,
        raceId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        earringId: "035",
        age: "12 a 24",
        weight: 356,
        registerDate: "2024-07-18",
        sex: "Macho",
        pregnantState: false,
        raceId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("animals", null, {});
  },
};
