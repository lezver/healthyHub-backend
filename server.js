const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(80);
    console.log("Server  running. Use our API on port: 80");
  })
  .catch((err) => {
    console.error(err.message);

    process.exit(1);
  });
