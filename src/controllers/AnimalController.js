const Controller = require("./Controller.js");
const AnimalServices = require("../services/AnimalServices.js");
const NoRecords = require("../messages/NoRecords.js");

const animalServices = new AnimalServices();

class AnimalController extends Controller {
  constructor() {
    super(animalServices);
  }

  async modifyRecordsInGroup(req, res, next) {
    const { newVetHistoricData, vaccinesInfoArr, animalsIdsArr } = req.body;

    try {
      const resultObj = await animalServices.modifyRecordsInGroup(
        animalsIdsArr,
        vaccinesInfoArr,
        newVetHistoricData
      );

      if (resultObj instanceof NoRecords) {
        next(resultObj);
      } else {
        res.status(200).json({
          status: 200,
          ...resultObj,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AnimalController;
