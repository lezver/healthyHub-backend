const express = require("express");
const {
	register,
	login,
	logout,
	current,
	updateAvatar,
	checkEmailUser,
	changeOfGoal,
	changeSettings,
	changePassword,
} = require("../../../controllers/user");
const { validateBody, auth, uploadCloud } = require("../../../middlewares");
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
	changeOfGoal
);
router.patch(
	"/change-settings",
	auth,
	jsonParser,
	validateBody(settingsSchema),
	changeSettings
);
router.post("/avatars", auth, uploadCloud.single("avatar"), updateAvatar);
router.patch("/change-password", jsonParser, changePassword);

module.exports = router;
