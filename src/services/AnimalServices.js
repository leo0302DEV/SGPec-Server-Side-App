const { Race } = require("../database/models");
const datasource = require("../database/models");
const Services = require("./Services.js");
const AnimalVaccineServices = require("./AnimalVaccineServices.js");
const NotesServices = require("./NoteServices.js");
const NoRecords = require("../messages/NoRecords.js");
const Success = require("../messages/Success.js");

const animalVaccinesService = new AnimalVaccineServices();
const notesServices = new NotesServices();

class AnimalServices extends Services {
  constructor() {
    super("Animal");
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
          "sex",
          "pregnantState",
          "race",
        ],
      });

      if (!animalRecord) {
        return new NoRecords(
          `O registro com id: ${pk} não foi encontrado no banco.`
        );
      }

      return { animalRecord: animalRecord };
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
        const today = new Date();
        const formattedDate =
          today.getFullYear() +
          "-" +
          String(today.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(today.getDate()).padStart(2, "0");

        (await arrOfAnimalsIds).forEach(async (id) => {
          await notesServices.createNewRecord({
            animalId: id,
            creationDate: formattedDate,
            anotations: newVetHistoricData,
          });
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
