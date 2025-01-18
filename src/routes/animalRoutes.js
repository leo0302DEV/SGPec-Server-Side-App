const { Router } = require("express");
const AnimalController = require("../controllers/AnimalController.js");

const router = new Router();
const animalController = new AnimalController();

router.get("/animals", (req, res, next) => {
  animalController.catchAll(req, res, next);
});
router.get("/animals/:id", (req, res, next) =>
  animalController.catchOne(req, res, next)
);
router.get("/animals/all/:id", (req, res, next) =>
  animalController.returnAllAboutAnAnimal(req, res, next)
);
router.post("/animals", (req, res, next) =>
  animalController.create(req, res, next)
);
router.put("/animals/group", (req, res, next) => {
  animalController.modifyRecordsInGroup(req, res, next);
});
router.put("/animals/:id", (req, res, next) =>
  animalController.update(req, res, next)
);
router.delete("/animals/:id", (req, res, next) =>
  animalController.delete(req, res, next)
);

module.exports = router;
