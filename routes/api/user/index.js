const express = require("express");
const {
	register,
	login,
	logout,
	current,
	updateAvatar,
	checkEmailUser,
	chengeOfGoal,
	changeSettings,
} = require("../../../controllers/user");
const { validateBody, auth, upload } = require("../../../middlewares");
const {
	registerSchema,
	loginSchema,
	emailSchema,
	goalSchema,
	settingsSchema,
} = require("../../../models/user");

const router = express.Router();
const jsonParser = express.json();

router.post("/register", jsonParser, validateBody(registerSchema), register);

router.post(
	"/check-email",
	jsonParser,
	validateBody(emailSchema),
	checkEmailUser
);
router.post("/login", jsonParser, validateBody(loginSchema), login);
router.post("/logout", auth, logout);
router.get("/current", auth, current);
router.patch(
	"/change-goal",
	auth,
	jsonParser,
	validateBody(goalSchema),
	chengeOfGoal
);
router.patch(
	"/change-settings",
	auth,
	jsonParser,
	validateBody(settingsSchema),
	changeSettings
);
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);

module.exports = router;
