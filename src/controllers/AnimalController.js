const Controller = require("./Controller.js");
const AnimalServices = require("../services/AnimalServices.js");
const NoRecords = require("../messages/NoRecords.js");

const animalServices = new AnimalServices();

class AnimalController extends Controller {
  constructor() {
    super(animalServices);
  }

  async modifyRecordsInGroup(req, res, next) {
    const { earringsIds } = req.query;
    const { newVetHistoricData, vaccinesInfoArr } = req.body;

    try {
      const arrOfEarringsId = earringsIds.split(",");

      const resultObj = await animalServices.modifyRecordsInGroup(
        arrOfEarringsId,
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
