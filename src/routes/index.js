const express = require("express");
const animalRoutes = require("./animalRoutes.js");
const raceRoutes = require("./raceRoutes.js");
const vaccineRoutes = require("./vaccineRoutes.js");
const animalVaccinesRoutes = require("./animalVaccinesRoutes.js");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.send("Test route");
  });

  app.use(
    express.json(),
    animalRoutes,
    raceRoutes,
    vaccineRoutes,
    animalVaccinesRoutes
  );
};

module.exports = routes;
