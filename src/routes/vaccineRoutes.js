const { Router } = require("express");
const VaccineController = require("../controllers/VaccineController.js");

const router = new Router();
const vaccineController = new VaccineController();

router.get("/vaccines", (req, res, next) =>
  vaccineController.catchAll(req, res, next)
);
router.get("/vaccines/:id", (req, res, next) =>
  vaccineController.catchOne(req, res, next)
);
router.post("/vaccines", (req, res, next) =>
  vaccineController.create(req, res, next)
);
router.put("/vaccines/:id", (req, res, next) =>
  vaccineController.update(req, res, next)
);
router.delete("/vaccines/:id", (req, res, next) =>
  vaccineController.delete(req, res, next)
);

module.exports = router;
