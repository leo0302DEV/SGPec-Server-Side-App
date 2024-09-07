const datasource = require("../database/models");
const NoRecords = require("../messages/NoRecords.js");
const Services = require("./Services.js");
const { Animal } = require("../database/models");
const { Medicine } = require("../database/models");

class AnimalMedServices extends Services {
  constructor() {
    super("AnimalMed");
  }

  async catchOneAnimalMedicinesByPk(animalPk) {
    try {
      const medicines = await datasource[this.modelName].findAll({
        where: {
          animalId: animalPk,
        },
        paranoid: true,
        attributes: ["id"],
        include: [
          { model: Medicine, attributes: ["name"] },
          { model: Animal, attributes: ["earringId"] },
        ],
      });

      if (medicines.length <= 0) {
        return new NoRecords(
          "Não foram encontrados medicamentos registrados no sistema para esse animal."
        );
      } else {
        return medicines;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AnimalMedServices;
