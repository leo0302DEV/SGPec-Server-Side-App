const { Router } = require("express");
const AnimalMedController = require("../controllers/AnimalMedController.js");

const router = new Router();
const animalMedController = new AnimalMedController();

router.get("/animalMed/:id", (req, res, next) =>
  animalMedController.catchOneAnimalMedicinesByPk(req, res, next)
);
router.post("/animalMed", (req, res, next) =>
  animalMedController.create(req, res, next)
);
router.delete("/animalMed/:id", (req, res, next) =>
  animalMedController.delete(req, res, next)
);

module.exports = router;
