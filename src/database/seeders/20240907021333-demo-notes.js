"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "notes",
      [
        {
          animalId: 1,
          creationDate: "2024-09-01",
          anotations: "Animal com bom comportamento, sem sinais de doença.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 2,
          creationDate: "2024-09-02",
          anotations: "Dieta ajustada para ganho de peso.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 3,
          creationDate: "2024-09-03",
          anotations: "Tratamento iniciado para parasitas externos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 4,
          creationDate: "2024-09-04",
          anotations:
            "Monitoramento de cicatriz pós-cirúrgica, sem complicações.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 5,
          creationDate: "2024-09-05",
          anotations:
            "Suplemento mineral administrado, próxima dose em 30 dias.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 1,
          creationDate: "2024-09-06",
          anotations:
            "Verificação de estado reprodutivo, animal apto para cruzamento.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 3,
          creationDate: "2024-09-07",
          anotations:
            "Medicação aplicada para controle de infecções respiratórias.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 4,
          creationDate: "2024-09-08",
          anotations: "Animal com sinais de melhora, controle de peso mantido.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 2,
          creationDate: "2024-09-09",
          anotations:
            "Verificação de cascos realizada, sem necessidade de tratamento.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 5,
          creationDate: "2024-09-10",
          anotations: "Aplicação de vitamina, novo check-up em 15 dias.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("notes", null, {});
  },
};
