const Controller = require("./Controller.js");
const NoRecords = require("../messages/NoRecords.js");
const AnimalMedServices = require("../services/AnimalMedServices.js");

const animalMedServices = new AnimalMedServices();

class AnimalMedController extends Controller {
  constructor() {
    super(animalMedServices);
  }

  async catchOneAnimalMedicinesByPk(req, res, next) {
    const { id } = req.params;

    try {
      const medicines = await animalMedServices.catchOneAnimalMedicinesByPk(id);

      if (medicines instanceof NoRecords) {
        next(medicines);
      } else {
        res.status(200).json(medicines);
      }
    } catch (error) {
      console.log(error);

      next(error);
    }
  }
}

module.exports = AnimalMedController;
