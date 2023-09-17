const express = require("express");
const user = require("./api/user");
// const { auth } = require("../middlewares");

const router = express.Router();

router.use("/user", user);

module.exports = router;
