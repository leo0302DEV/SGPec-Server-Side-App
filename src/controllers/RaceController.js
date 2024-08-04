const Controller = require("./Controller.js");
const RaceServices = require("../services/ReceServices.js");

const raceServices = new RaceServices();

class RaceController extends Controller {
  constructor() {
    super(raceServices);
  }
}

module.exports = RaceController;
