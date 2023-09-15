const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(6666);
    console.log("Server  running. Use our API on port: 6666");
  })
  .catch((err) => {
    console.error(err.message);

    process.exit(1);
  });
