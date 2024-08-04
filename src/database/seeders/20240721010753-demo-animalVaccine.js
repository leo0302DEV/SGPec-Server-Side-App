"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "animalVaccines",
      [
        {
          applicationDate: "2023-07-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 1,
          vaccineId: 1,
        },
        {
          applicationDate: "2024-07-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 1,
          vaccineId: 2,
        },
        {
          applicationDate: "2024-07-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 1,
          vaccineId: 3,
        },
        {
          applicationDate: "2023-12-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 2,
          vaccineId: 1,
        },
        {
          applicationDate: "2022-07-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 2,
          vaccineId: 2,
        },
        {
          applicationDate: "2024-06-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 2,
          vaccineId: 3,
        },
        {
          applicationDate: "2024-01-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 3,
          vaccineId: 1,
        },
        {
          applicationDate: "2023-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 3,
          vaccineId: 2,
        },
        {
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 3,
          vaccineId: 3,
        },
        {
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 4,
          vaccineId: 1,
        },
        {
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 4,
          vaccineId: 2,
        },
        {
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 4,
          vaccineId: 3,
        },
        {
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 5,
          vaccineId: 1,
        },
        {
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 5,
          vaccineId: 2,
        },
        {
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: 5,
          vaccineId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("animalVaccines", null, {});
  },
};
