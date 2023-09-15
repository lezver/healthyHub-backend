const express = require("express");

const app = express();

app.get("/api", (req, res) => res.send("test 123 456"));

app.use((req, res) => res.status(404).send({ message: "Not found" }));

app.use((err, req, res, next) => {
	const { status = 500, message = "Internal server error" } = err;

	return res.status(status).send({ message });
});

module.exports = app;
