"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "vaccines",
      [
        {
          name: "aftosa",
          description:
            "Imuniza o gado contra a febre aftosa, uma doença viral altamente contagiosa que afeta bovinos e outros animais de casco fendido.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "carbúnculo",
          description:
            "Protege o gado contra o carbúnculo, uma doença bacteriana aguda causada pelo Bacillus anthracis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "remédio lombo",
          description:
            "Trata infecções e inflamações na região lombar do gado. Essencial para aliviar dores e melhorar a mobilidade.",
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
