"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "races",
      [
        {
          raceName: "angus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceName: "nelore",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceName: "braford",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceName: "zebu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          raceName: "hereford",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("races", null, {});
  },
};
