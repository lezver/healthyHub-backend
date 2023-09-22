const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.static("public"));

app.use("/api", routes);

app.use((req, res) => res.status(404).send({ message: "Not found" }));

app.use((err, req, res, next) => {
	const { status = 500, message = "Internal server error" } = err;

	return res.status(status).send({ message });
});

module.exports = app;
