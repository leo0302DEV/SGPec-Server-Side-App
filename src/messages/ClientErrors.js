const MoldError = require("./MoldError.js");

class ClientErrors extends MoldError {
  constructor(status = 400, message) {
    super(status, message);
  }
}

module.exports = ClientErrors;
