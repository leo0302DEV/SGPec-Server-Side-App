const { Vaccine } = require("../database/models");
const datasource = require("../database/models");
const NoRecords = require("../messages/NoRecords.js");
const Services = require("./Services.js");

class AnimalVaccineServices extends Services {
  constructor() {
    super("AnimalVaccine");
  }

  async catchOneAnimalVaccinesByPk(animalPk) {
    try {
      const returnedRecords = await datasource[this.modelName].findAll({
        where: {
          animalId: animalPk,
        },
        attributes: ["id", "applicationDate"],
        include: [{ model: Vaccine, attributes: ["id", "name"] }],
      });

      if (returnedRecords.length <= 0) {
        return new NoRecords();
      } else {
        return returnedRecords;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AnimalVaccineServices;
