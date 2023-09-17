const express = require("express");
const {
	register,
	login,
	logout,
	current,
	updateAvatar,
	verifyEmail,
	resendVerifyEmail,
	physicalData,
  foodIntake,
} = require("../../controllers/user");
const { validateBody, auth, upload } = require("../../middlewares");
const {
	registerSchema,
	loginSchema,
	physicalDataSchema,
  FoodIntake,
} = require("../../models");
const {
  statisticsLastMonth,
} = require("../../controllers/user/statisticsLastMonth");

const router = express.Router();
const jsonParser = express.json();

router.post("/register", jsonParser, validateBody(registerSchema), register);
router.patch(
	"/physical-data",
	jsonParser,
	validateBody(physicalDataSchema),
	physicalData
);
router.get("/verify/:verificationToken", verifyEmail);
router.post("/verify", jsonParser, resendVerifyEmail);
router.post("/login", jsonParser, validateBody(loginSchema), login);
router.post("/logout", auth, logout);
router.get("/current", auth, current);
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);
router.post(
  "/food-intake",
  jsonParser,
  // validateBody(FoodIntake),
  foodIntake
);
router.post("/statistics-last-Month", jsonParser, statisticsLastMonth);


module.exports = router;
