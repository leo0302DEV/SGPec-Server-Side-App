const datasource = require("../database/models");
const NoRecords = require("../messages/NoRecords.js");
const Services = require("./Services.js");

class NoteServices extends Services {
  constructor() {
    super("Note");
  }

  async catchOneAnimalNotesByPk(animalPk) {
    try {
      const notes = await datasource[this.modelName].findAll({
        where: {
          animalId: animalPk,
        },
        paranoid: true,
        attributes: ["id", "creationDate", "anotations"],
      });

      if (notes.length <= 0) {
        return new NoRecords(
          "Não foram encontradas anotações registradas no sistema para esse animal."
        );
      } else {
        return notes;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = NoteServices;
