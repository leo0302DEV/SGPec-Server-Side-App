"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "medicines",
      [
        {
          name: "Oxitetraciclina",
          indication:
            "Tratamento de infecções respiratórias e intestinais em bovinos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ivermectina",
          indication:
            "Controle de parasitas internos e externos, como vermes e carrapatos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dexametasona",
          indication:
            "Anti-inflamatório para reduzir inchaços e tratar condições alérgicas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cálcio injetável",
          indication:
            "Tratamento de hipocalcemia (febre do leite) em vacas lactantes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Antipirético",
          indication: "Redução da febre em bovinos durante infecções",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Enrofloxacino",
          indication:
            "Antibiótico de amplo espectro para infecções bacterianas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fluazuron",
          indication: "Controle do carrapato bovino",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cloprostenol",
          indication: "Controle do ciclo estral e indução ao parto em bovinos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Levamisol",
          indication:
            "Desverminante para tratar infestações de vermes gastrointestinais",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sulfato de Neomicina",
          indication: "Tratamento de diarreia bacteriana em bezerros",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("medicines", null, {});
  },
};
