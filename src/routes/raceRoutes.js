const { Router } = require("express");
const RaceController = require("../controllers/RaceController.js");

const router = new Router();
const raceController = new RaceController();

router.get("/races", (req, res, next) =>
  raceController.catchAll(req, res, next)
);
router.get("/races/:id", (req, res, next) =>
  raceController.catchOne(req, res, next)
);
router.post("/races", (req, res, next) =>
  raceController.create(req, res, next)
);
router.put("/races/:id", (req, res, next) =>
  raceController.update(req, res, next)
);
router.delete("/races/:id", (req, res, next) =>
  raceController.delete(req, res, next)
);

module.exports = router;
