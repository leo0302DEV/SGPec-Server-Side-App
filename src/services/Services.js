const datasource = require("../database/models");
const NoRecords = require("../messages/NoRecords.js");
const Success = require("../messages/Success.js");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async catchAllRecords(where = {}) {
    try {
      const allRecords = await datasource[this.modelName].findAll({
        where: { ...where },
        paranoid: true,
      });

      if (allRecords.length <= 0) {
        return new NoRecords();
      } else {
        return allRecords;
      }
    } catch (error) {
      throw error;
    }
  }

  async catchOneRecordByPk(pk) {
    try {
      const record = await datasource[this.modelName].findByPk(pk, {
        paranoid: true,
      });

      if (!record) {
        return new NoRecords(
          `O registro com id: ${pk} não foi encontrado no banco. Verifique se este não foi excluido por engano.`
        );
      } else {
        return record;
      }
    } catch (error) {
      throw error;
    }
  }

  async createNewRecord(newRecordData) {
    try {
      await datasource[this.modelName].create(newRecordData);

      return new Success("Novo registro criado com sucesso!");
    } catch (error) {
      throw error;
    }
  }

  async updateRecordByPk(recordsNewData, pk) {
    try {
      const [updatedCount] = await datasource[this.modelName].update(
        recordsNewData,
        {
          where: { id: pk },
        }
      );

      if (updatedCount.length <= 0) {
        return new NoRecords(
          `O registro com id: ${pk} não foi encontrado no banco para ser atualizado.`
        );
      } else {
        return new Success("Registro atualizado com sucesso!");
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteRecord(pk) {
    try {
      const deletedCount = await datasource[this.modelName].destroy({
        where: {
          id: pk,
        },
        force: true,
      });

      if (deletedCount <= 0) {
        return new NoRecords(
          `O registro com id: ${pk} não foi encontrado no banco para ser deletado.`
        );
      } else {
        return new Success(
          `Registro com id: ${pk} deletado com sucesso! Número de registros deletados: ${deletedCount}.`
        );
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Services;
