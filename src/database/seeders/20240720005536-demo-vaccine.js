"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "vaccines",
      [
        {
          name: "Vacina Aftosa",
          indicationAplic: "Proteção contra febre aftosa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Brucelose",
          indicationAplic: "Prevenção da brucelose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Clostridial",
          indicationAplic: "Proteção contra clostridioses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Leptospirose",
          indicationAplic: "Prevenção contra leptospirose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina IBR/BVD",
          indicationAplic:
            "Proteção contra rinotraqueíte infecciosa bovina e diarreia viral bovina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Raiva",
          indicationAplic: "Prevenção contra raiva",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Anaplasmose",
          indicationAplic: "Prevenção da anaplasmose bovina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Tétano",
          indicationAplic: "Proteção contra tétano",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Botulismo",
          indicationAplic: "Prevenção contra botulismo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Raiva Herbívoro",
          indicationAplic: "Proteção contra raiva em herbívoros",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("vaccines", null, {});
  },
};
