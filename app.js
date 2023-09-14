const express = require("express");

const app = express();

app.get("/api", (req, res) => res.send("test"));

app.use((req, res) => res.status(404).send({ message: "Not found" }));

app.use((err, req, res, next) => {
	const { status = 500, message = "Internal server error" } = err;

	return res.status(status).send({ message });
});

app.listen(3333);

// module.exports = app;
