"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "notes",
      [
        {
          id: uuidv4(),
          animalId: "ab26d43f-3c86-4775-814e-aaabd5f0d07c",
          creationDate: "2024-09-01",
          anotations: "Animal com bom comportamento, sem sinais de doença.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          animalId: "28d5d79b-bf4b-4666-9336-134caf1bbb28",
          creationDate: "2024-09-02",
          anotations: "Dieta ajustada para ganho de peso.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          animalId: "ffc47cb3-5844-4a02-9c8d-101448f1fd34",
          creationDate: "2024-09-03",
          anotations: "Tratamento iniciado para parasitas externos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          animalId: "cc4e826d-b13b-4bc7-9232-e1c91ef0e77e",
          creationDate: "2024-09-04",
          anotations:
            "Monitoramento de cicatriz pós-cirúrgica, sem complicações.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          animalId: "fc31b64a-018d-4d10-9aad-fdba99528807",
          creationDate: "2024-09-05",
          anotations:
            "Suplemento mineral administrado, próxima dose em 30 dias.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          animalId: "ab26d43f-3c86-4775-814e-aaabd5f0d07c",
          creationDate: "2024-09-06",
          anotations:
            "Verificação de estado reprodutivo, animal apto para cruzamento.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          animalId: "ffc47cb3-5844-4a02-9c8d-101448f1fd34",
          creationDate: "2024-09-07",
          anotations:
            "Medicação aplicada para controle de infecções respiratórias.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          animalId: "cc4e826d-b13b-4bc7-9232-e1c91ef0e77e",
          creationDate: "2024-09-08",
          anotations: "Animal com sinais de melhora, controle de peso mantido.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          animalId: "28d5d79b-bf4b-4666-9336-134caf1bbb28",
          creationDate: "2024-09-09",
          anotations:
            "Verificação de cascos realizada, sem necessidade de tratamento.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          animalId: "fc31b64a-018d-4d10-9aad-fdba99528807",
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
