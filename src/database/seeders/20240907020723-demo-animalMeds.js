"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "animalMeds",
      [
        {
          animalId: 1,
          medicineId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 2,
          medicineId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 3,
          medicineId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 4,
          medicineId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 5,
          medicineId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 1,
          medicineId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 3,
          medicineId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 4,
          medicineId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 2,
          medicineId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 5,
          medicineId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("animalMeds", null, {});
  },
};
