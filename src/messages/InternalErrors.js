const MoldError = require("./MoldError.js");

class InternalErrors extends MoldError {
  constructor() {
    super();
  }
}

module.exports = InternalErrors;
