const { Router } = require("express");
const NoteController = require("../controllers/NoteController.js");

const router = new Router();
const noteController = new NoteController();

router.get("/notes/:id", (req, res, next) =>
  noteController.catchOneAnimalNotesByPk(req, res, next)
);
router.post("/notes", (req, res, next) =>
  noteController.create(req, res, next)
);
router.delete("/notes/:id", (req, res, next) =>
  noteController.delete(req, res, next)
);

module.exports = router;
