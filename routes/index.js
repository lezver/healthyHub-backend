const express = require("express");
const user = require("./api/user");
const food = require("./api/food");
// const { auth } = require("../middlewares");

const router = express.Router();

router.use("/user", user);
router.use("/food", food);

module.exports = router;
