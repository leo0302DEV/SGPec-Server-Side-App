const { Router } = require("express");
const MedicineController = require("../controllers/MedicineController.js");

const router = new Router();
const medicineController = new MedicineController();

router.get("/medicines", (req, res, next) =>
  medicineController.catchAll(req, res, next)
);
router.get("/medicines/:id", (req, res, next) =>
  medicineController.catchOne(req, res, next)
);
router.post("/medicines", (req, res, next) =>
  medicineController.create(req, res, next)
);
router.put("/medicines/:id", (req, res, next) =>
  medicineController.update(req, res, next)
);
router.delete("/medicines/:id", (req, res, next) =>
  medicineController.delete(req, res, next)
);

module.exports = router;
