const express = require("express");
const {
	register,
	login,
	logout,
	current,
	updateAvatar,
} = require("../../controllers/user");
const { validateBody, auth, upload } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../models");

const router = express.Router();
const jsonParser = express.json();

router.post("/register", jsonParser, validateBody(registerSchema), register);
router.post("/login", jsonParser, validateBody(loginSchema), login);
router.post("/logout", auth, logout);
router.get("/current", auth, current);
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);

module.exports = router;
