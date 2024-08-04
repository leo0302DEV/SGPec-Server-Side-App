const Controller = require("./Controller.js");
const AnimalVaccineServices = require("../services/AnimalVaccineServices.js");

const animalVaccineServices = new AnimalVaccineServices();

class AnimalVaccineController extends Controller {
  constructor() {
    super(animalVaccineServices);
  }
}

module.exports = AnimalVaccineController;
