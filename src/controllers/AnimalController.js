const Controller = require("./Controller.js");
const AnimalServices = require("../services/AnimalServices.js");
const NoRecords = require("../messages/NoRecords.js");

const animalServices = new AnimalServices();

class AnimalController extends Controller {
  constructor() {
    super(animalServices);
  }

  async returnAllAboutAnAnimal(req, res, next) {
    const { id } = req.params;

    try {
      const resultObj = await animalServices.returnAllAboutAnAnimal(id);

      if (resultObj instanceof NoRecords) {
        next(resultObj);
      } else {
        res.status(200).json({
          status: 200,
          ...resultObj,
        });
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = AnimalController;
