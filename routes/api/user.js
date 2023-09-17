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
<<<<<<< Updated upstream
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

=======
const { validateBody } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../models");
<<<<<<< Updated upstream
const { FoodIntake } = require("../../models/foodIntake");
const {
  statisticsLastMonth,
} = require("../../controllers/user/statisticsLastMonth");
=======
const dayController = require("../../controllers/day");

>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
router.post("/logout", logout);
router.get("/current", current);
router.post("/day", jsonParser, dayController.createDay);
router.put("/day", jsonParser, dayController.updateDay);
<<<<<<< Updated upstream
router.post("/logout", auth, logout);
router.get("/current", auth, current);
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
router.post(
  "/food-intake",
  jsonParser,
  // validateBody(FoodIntake),
  foodIntake
);
router.post("/statistics-last-Month", jsonParser, statisticsLastMonth);
=======
>>>>>>> Stashed changes


module.exports = router;
