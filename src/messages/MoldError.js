class MoldError extends Error {
  constructor(statusCode = 500, errorMessage = "Erro interno do servidor") {
    super();
    this.status = statusCode;
    this.errorMessage = errorMessage;
  }

  sendMessage(res) {
    res.status(this.status).json({
      status: this.status,
      message: this.errorMessage,
      name: this.name,
    });
  }
}

module.exports = MoldError;
