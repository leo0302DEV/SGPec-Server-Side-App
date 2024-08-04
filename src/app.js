const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const errorMiddleware = require("./middlewares/ErrorMiddleware.js");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

routes(app);

app.use(errorMiddleware);

module.exports = app;
