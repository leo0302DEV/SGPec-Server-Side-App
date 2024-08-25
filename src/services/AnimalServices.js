const { Race } = require("../database/models");
const datasource = require("../database/models");
const Services = require("./Services.js");
const AnimalVaccineServices = require("./AnimalVaccineServices.js");
const NoRecords = require("../messages/NoRecords.js");
const Success = require("../messages/Success.js");

const animalVaccinesService = new AnimalVaccineServices();

class AnimalServices extends Services {
  constructor() {
    super("Animal");
  }

  async catchAllRecordsPaginated(limitOfRecordsPerPage = 5, pageNumber = 1) {
    try {
      const limit = limitOfRecordsPerPage; //Number of records returned per page. Default value is 5.
      const page = pageNumber - 1; //Number of the page. Default value is 0.
      const offset = page * limit; //Number of records that it needs to ignore. Default value is (0 * 5) = 0.

      const paginatedRecordsInfoObj = await datasource[
        this.modelName
      ].findAndCountAll({
        limit: limit,
        offset: offset,
        attributes: ["id", "earringId", "weight", "sex"],
        include: [{ model: Race, attributes: ["raceName"] }],
      });

      if (paginatedRecordsInfoObj.count > 0) {
        const totalRecords = paginatedRecordsInfoObj.count; //Total of records on that table in the database.
        const returnedRowsArr = paginatedRecordsInfoObj.rows; //Array of returned rows.
        const numberOfPages = Math.ceil(totalRecords / limit);
        const currentPage = page + 1;
        const nextPageURL =
          currentPage < numberOfPages
            ? `https://sgpec-server-side-app-production.up.railway.app/animals?page=${
                currentPage + 1
              }&limit=${limit}`
            : null;

        return {
          totalRecords,
          numberOfPages,
          currentPage,
          nextPageURL,
          returnedRowsArr,
        };
      } else {
        return new NoRecords(
          `Ainda não há registros no banco. Crie novos registros para popular o sistema.`
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async catchOneRecordByPk(pk) {
    try {
      const animalRecord = await datasource[this.modelName].findByPk(pk, {
        paranoid: true,
        attributes: [
          "id",
          "earringId",
          "age",
          "weight",
          "registerDate",
          "vetHistoric",
          "sex",
          "pregnantState",
        ],
        include: [{ model: Race, attributes: ["raceName"] }],
      });

      if (!animalRecord) {
        return new NoRecords(
          `O registro com id: ${pk} não foi encontrado no banco.`
        );
      } else {
        const animalRecordVaccines =
          await animalVaccinesService.catchOneAnimalVaccinesByPk(pk);

        if (animalRecordVaccines instanceof NoRecords) {
          return {
            animalRecord: animalRecord,
            animalRecordVaccines: [],
          };
        } else {
          return {
            animalRecord: animalRecord,
            animalRecordVaccines: animalRecordVaccines,
          };
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async modifyRecordsInGroup(
    arrOfEarringsIds,
    vaccinesInfoArr,
    newVetHistoricData
  ) {
    try {
      const arrOfAnimalsIds = Promise.all(
        arrOfEarringsIds.map(async (earring) => {
          const animalRecord = await datasource[this.modelName].findOne({
            where: { earringId: earring },
          });

          if (!animalRecord) {
            return new NoRecords(
              `O animal com brinco: ${earring} não foi encontrado no banco, verifique se você digitou corretamente os números identificadores de cada animal.`
            );
          }

          return animalRecord.id;
        })
      );

      if (newVetHistoricData && newVetHistoricData !== "") {
        (await arrOfAnimalsIds).forEach(async (id) => {
          const animal = await datasource[this.modelName].findByPk(id);

          const animalCurrentVetHistoric = animal.vetHistoric;
          const newAnimalVetHistoric = `${animalCurrentVetHistoric}\n${newVetHistoricData}`;

          const updated = await this.updateRecordByPk(
            {
              vetHistoric: newAnimalVetHistoric,
            },
            id
          );

          if (updated instanceof NoRecords) {
            return updated;
          }
        });
      }

      if (vaccinesInfoArr && vaccinesInfoArr.length > 0) {
        (await arrOfAnimalsIds).forEach(async (id) => {
          vaccinesInfoArr.forEach(async (vaccine) => {
            const applicationDate = vaccine.applicationDate;
            const animalId = id;
            const vaccineId = vaccine.vaccineId;

            const createdRecord = await animalVaccinesService.createNewRecord({
              applicationDate: applicationDate,
              AnimalId: animalId,
              VaccineId: vaccineId,
            });

            if (!(createdRecord instanceof Success)) {
              return createdRecord;
            }
          });
        });
      }

      return {
        numberOfModifications: arrOfEarringsIds.length,
        message: "Registros modificados com sucesso!",
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AnimalServices;
