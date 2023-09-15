const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.use((req, res) => res.status(404).send({ message: "Not found" }));

app.use((err, req, res, next) => {
  const { status = 500, message = "Internal server error" } = err;

  return res.status(status).send({ message });
});

module.exports = app;
