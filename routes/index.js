const express = require("express");
const user = require("./api/user");
const food = require("./api/food");
const day = require("./api/day/day");

// const { auth } = require("../middlewares");

const router = express.Router();

router.use("/user", user);
router.use("/user", food);
router.use("/user", day);
module.exports = router;
