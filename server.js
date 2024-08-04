const dotenv = require("dotenv/config");
const app = require("./src/app.js");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
