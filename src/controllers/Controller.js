const NoRecords = require("../messages/NoRecords.js");
const Success = require("../messages/Success.js");

class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async catchAll(req, res, next) {
    try {
      const allRecords = await this.serviceEntity.catchAllRecords();

      if (allRecords instanceof NoRecords) {
        next(allRecords);
      } else {
        res.status(200).json(allRecords);
      }
    } catch (error) {
      next(error);
    }
  }

  async catchOne(req, res, next) {
    const { id } = req.params;

    try {
      const record = await this.serviceEntity.catchOneRecordByPk(id);

      if (record instanceof NoRecords) {
        next(record);
      } else {
        res.status(200).json(record);
      }
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    const newRecordData = req.body;

    try {
      const recordCreatedSuccesfully = await this.serviceEntity.createNewRecord(
        newRecordData
      );

      if (recordCreatedSuccesfully instanceof Success) {
        res.status(201).send(recordCreatedSuccesfully.message);
      }
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    const recordsNewData = req.body;

    try {
      const updatedRecord = await this.serviceEntity.updateRecordByPk(
        recordsNewData,
        id
      );

      if (updatedRecord instanceof NoRecords) {
        next(updatedRecord);
      } else if (updatedRecord instanceof Success) {
        res.status(200).send(updatedRecord.message);
      }
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;

    try {
      const deletedRecord = await this.serviceEntity.deleteRecord(id);

      if (deletedRecord instanceof NoRecords) {
        next(deletedRecord);
      } else if (deletedRecord instanceof Success) {
        res.status(200).send(deletedRecord.message);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
