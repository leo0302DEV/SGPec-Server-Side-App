const Controller = require("./Controller.js");
const MedicineServices = require("../services/MedicineServices.js");

const medicineServices = new MedicineServices();

class MedicineController extends Controller {
  constructor() {
    super(medicineServices);
  }
}

module.exports = MedicineController;
