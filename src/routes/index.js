const express = require("express");
const animalRoutes = require("./animalRoutes.js");
const raceRoutes = require("./raceRoutes.js");
const vaccineRoutes = require("./vaccineRoutes.js");
const animalVaccinesRoutes = require("./animalVaccinesRoutes.js");
const medicinesRoutes = require("./medicineRoutes.js");
const animalMedRoutes = require("./animalMedRoutes.js");
const notesRouter = require("./noteRoutes.js");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.send("Test route");
  });

  app.use(
    express.json(),
    animalRoutes,
    raceRoutes,
    vaccineRoutes,
    animalVaccinesRoutes,
    medicinesRoutes,
    animalMedRoutes,
    notesRouter
  );
};

module.exports = routes;
