const Controller = require("./Controller.js");
const NoteServices = require("../services/NoteServices.js");
const NoRecords = require("../messages/NoRecords.js");

const noteServices = new NoteServices();

class NoteController extends Controller {
  constructor() {
    super(noteServices);
  }

  async catchOneAnimalNotesByPk(req, res, next) {
    const { id } = req.params;

    try {
      const notes = await noteServices.catchOneAnimalNotesByPk(id);

      if (notes instanceof NoRecords) {
        next(notes);
      } else {
        res.status(200).json(notes);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = NoteController;
