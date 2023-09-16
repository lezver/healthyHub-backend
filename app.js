const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const path = require("node:path");
const app = express();

app.use(cors());

app.use("/goal", express.static(path.join(__dirname, "public")));

app.use("/api", routes);

app.use((req, res) => res.status(404).send({ message: "Not found" }));

app.use((err, req, res, next) => {
  const { status = 500, message = "Internal server error" } = err;

  return res.status(status).send({ message });
});

module.exports = app;
