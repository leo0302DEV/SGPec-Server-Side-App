const { Router } = require("express");
const AnimalVaccineController = require("../controllers/AnimalVaccineController.js");

const router = new Router();
const animalVaccineController = new AnimalVaccineController();

router.post("/animalVaccines", (req, res, next) =>
  animalVaccineController.create(req, res, next)
);
router.delete("/animalVaccines/:id", (req, res, next) =>
  animalVaccineController.delete(req, res, next)
);

module.exports = router;
