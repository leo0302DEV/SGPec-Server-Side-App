const Controller = require("../controllers/Controller.js");
const VaccineServices = require("../services/VaccineServices.js");

const vaccineServices = new VaccineServices();

class VaccineController extends Controller {
  constructor() {
    super(vaccineServices);
  }
}

module.exports = VaccineController;
