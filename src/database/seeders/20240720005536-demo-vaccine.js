"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "vaccines",
      [
        {
          name: "Vacina Aftosa",
          dosesNum: 2,
          seasonAplic: "Primavera",
          indicationAplic: "Proteção contra febre aftosa",
          notes: "Necessário reforço após 6 meses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Brucelose",
          dosesNum: 1,
          seasonAplic: "Outono",
          indicationAplic: "Prevenção da brucelose",
          notes: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Clostridial",
          dosesNum: 1,
          seasonAplic: "Inverno",
          indicationAplic: "Proteção contra clostridioses",
          notes: "Pode causar reação local",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Leptospirose",
          dosesNum: 2,
          seasonAplic: "Primavera",
          indicationAplic: "Prevenção contra leptospirose",
          notes: "Recomenda-se reforço anual",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina IBR/BVD",
          dosesNum: 2,
          seasonAplic: "Verão",
          indicationAplic:
            "Proteção contra rinotraqueíte infecciosa bovina e diarreia viral bovina",
          notes: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Raiva",
          dosesNum: 1,
          seasonAplic: "Outono",
          indicationAplic: "Prevenção contra raiva",
          notes: "Aplicar anualmente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Anaplasmose",
          dosesNum: 1,
          seasonAplic: "Primavera",
          indicationAplic: "Prevenção da anaplasmose bovina",
          notes: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Tétano",
          dosesNum: 1,
          seasonAplic: "Verão",
          indicationAplic: "Proteção contra tétano",
          notes: "Recomenda-se reforço a cada 5 anos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Botulismo",
          dosesNum: 2,
          seasonAplic: "Inverno",
          indicationAplic: "Prevenção contra botulismo",
          notes: "Necessário reforço anual",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacina Raiva Herbívoro",
          dosesNum: 1,
          seasonAplic: "Outono",
          indicationAplic: "Proteção contra raiva em herbívoros",
          notes: "Aplicar anualmente",
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
