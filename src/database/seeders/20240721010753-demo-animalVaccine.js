"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "animalVaccines",
      [
        {
          id: uuidv4(),
          applicationDate: "2023-07-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "ab26d43f-3c86-4775-814e-aaabd5f0d07c",
          vaccineId: "59e8bd96-fdce-4acb-8c35-e37d071a462a",
        },
        {
          id: uuidv4(),
          applicationDate: "2024-07-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "ab26d43f-3c86-4775-814e-aaabd5f0d07c",
          vaccineId: "c5a885b7-a1fa-4605-9db6-23b113592cd0",
        },
        {
          id: uuidv4(),
          applicationDate: "2024-07-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "ab26d43f-3c86-4775-814e-aaabd5f0d07c",
          vaccineId: "c9149735-6ca7-4578-9e74-c7194ed42d60",
        },
        {
          id: uuidv4(),
          applicationDate: "2023-12-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "28d5d79b-bf4b-4666-9336-134caf1bbb28",
          vaccineId: "59e8bd96-fdce-4acb-8c35-e37d071a462a",
        },
        {
          id: uuidv4(),
          applicationDate: "2022-07-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "28d5d79b-bf4b-4666-9336-134caf1bbb28",
          vaccineId: "c5a885b7-a1fa-4605-9db6-23b113592cd0",
        },
        {
          id: uuidv4(),
          applicationDate: "2024-06-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "28d5d79b-bf4b-4666-9336-134caf1bbb28",
          vaccineId: "c9149735-6ca7-4578-9e74-c7194ed42d60",
        },
        {
          id: uuidv4(),
          applicationDate: "2024-01-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "ffc47cb3-5844-4a02-9c8d-101448f1fd34",
          vaccineId: "59e8bd96-fdce-4acb-8c35-e37d071a462a",
        },
        {
          id: uuidv4(),
          applicationDate: "2023-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "ffc47cb3-5844-4a02-9c8d-101448f1fd34",
          vaccineId: "c5a885b7-a1fa-4605-9db6-23b113592cd0",
        },
        {
          id: uuidv4(),
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "ffc47cb3-5844-4a02-9c8d-101448f1fd34",
          vaccineId: "c9149735-6ca7-4578-9e74-c7194ed42d60",
        },
        {
          id: uuidv4(),
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "cc4e826d-b13b-4bc7-9232-e1c91ef0e77e",
          vaccineId: "59e8bd96-fdce-4acb-8c35-e37d071a462a",
        },
        {
          id: uuidv4(),
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "cc4e826d-b13b-4bc7-9232-e1c91ef0e77e",
          vaccineId: "c5a885b7-a1fa-4605-9db6-23b113592cd0",
        },
        {
          id: uuidv4(),
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "cc4e826d-b13b-4bc7-9232-e1c91ef0e77e",
          vaccineId: "c9149735-6ca7-4578-9e74-c7194ed42d60",
        },
        {
          id: uuidv4(),
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "fc31b64a-018d-4d10-9aad-fdba99528807",
          vaccineId: "59e8bd96-fdce-4acb-8c35-e37d071a462a",
        },
        {
          id: uuidv4(),
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "fc31b64a-018d-4d10-9aad-fdba99528807",
          vaccineId: "c5a885b7-a1fa-4605-9db6-23b113592cd0",
        },
        {
          id: uuidv4(),
          applicationDate: "2024-03-19",
          createdAt: new Date(),
          updatedAt: new Date(),
          animalId: "fc31b64a-018d-4d10-9aad-fdba99528807",
          vaccineId: "c9149735-6ca7-4578-9e74-c7194ed42d60",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("animalVaccines", null, {});
  },
};
