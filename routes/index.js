const express = require("express");
const user = require("./api/user");
const day = require("./api/day/day");

const { auth } = require("../middlewares");

const router = express.Router();

router.use("/user", user);
router.use("/user", auth, day);

module.exports = router;
