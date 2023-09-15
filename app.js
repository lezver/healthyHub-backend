const express = require("express");
const api = require("./routers/api");

const app = express();

app.use("/api", api);

app.use((req, res) => res.status(404).send({ message: "Not found" }));

app.use((err, req, res, next) => {
	const { status = 500, message = "Internal server error" } = err;

	return res.status(status).send({ message });
});

module.exports = app;
