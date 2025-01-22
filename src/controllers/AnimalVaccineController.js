const Controller = require("./Controller.js");
const AnimalVaccineServices = require("../services/AnimalVaccineServices.js");
const NoRecords = require("../messages/NoRecords.js");

const animalVaccineServices = new AnimalVaccineServices();

class AnimalVaccineController extends Controller {
  constructor() {
    super(animalVaccineServices);
  }

  async catchOneAnimalVaccinesByPk(req, res, next) {
    const { id } = req.params;

    try {
      const returnedAnimalVaccines =
        await animalVaccineServices.catchOneAnimalVaccinesByPk(id);

      if (returnedAnimalVaccines instanceof NoRecords) {
        next(returnedAnimalVaccines);
      } else {
        res.status(200).json(returnedAnimalVaccines);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = AnimalVaccineController;
