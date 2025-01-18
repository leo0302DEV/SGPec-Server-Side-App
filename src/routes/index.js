const express = require("express");
const animalRoutes = require("./animalRoutes.js");
const vaccineRoutes = require("./vaccineRoutes.js");
const animalVaccinesRoutes = require("./animalVaccinesRoutes.js");
const notesRouter = require("./noteRoutes.js");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.send("Test route");
  });

  app.use(
    express.json(),
    animalRoutes,
    vaccineRoutes,
    animalVaccinesRoutes,
    notesRouter
  );
};

module.exports = routes;
