const MoldError = require("./MoldError.js");

class NoRecords extends MoldError {
  constructor(
    message = "Não foram encontrados registros no banco. Verifique se existem cadastros no sistema."
  ) {
    super(404, message);
  }
}

module.exports = NoRecords;
