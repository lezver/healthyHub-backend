const express = require("express");
const { register, login, logout, current } = require("../../controllers/user");
const { validateBody } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../models");

const router = express.Router();
const jsonParser = express.json();

router.post("/register", jsonParser, validateBody(registerSchema), register);
router.post("/login", jsonParser, validateBody(loginSchema), login);
router.post("/logout", logout);
router.get("/current", current);

module.exports = router;
