const { Sequelize } = require("sequelize");
const NoRecords = require("../messages/NoRecords.js");
const InternalErrors = require("../messages/InternalErrors.js");
const ClientErrors = require("../messages/ClientErrors.js");

function errorMiddleware(err, req, res, next) {
  if (err instanceof NoRecords) {
    err.sendMessage(res);
  } else if (err instanceof Sequelize.ValidationError) {
    new ClientErrors(
      "Verifique se os dados passados estão corretos."
    ).sendMessage(res);
  } else if (err instanceof Sequelize.UniqueConstraintError) {
    new ClientErrors(
      "Você não pode incerir dados duplicados no banco."
    ).sendMessage(res);
  } else if (err instanceof Sequelize.ForeignKeyConstraintError) {
    new ClientErrors(
      "Verifique as chaves estrangeiras do objeto passado."
    ).sendMessage(res);
  } else {
    new InternalErrors().sendMessage(res);
  }
}

module.exports = errorMiddleware;
