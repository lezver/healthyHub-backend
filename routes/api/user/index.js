const express = require("express");
const {
  register,
  login,
  logout,
  current,
  updateAvatar,
  checkEmailUser,
} = require("../../../controllers/user");
const { validateBody, auth, upload } = require("../../../middlewares");
const {
  registerSchema,
  loginSchema,
  checkEmailUserSchema,
} = require("../../../models/user");

// const {
// 	statisticsLastMonth,
// } = require("../../../controllers/user/statisticsLastMonth");

const router = express.Router();
const jsonParser = express.json();

router.post("/register", jsonParser, validateBody(registerSchema), register);
router.patch(
  "/check-email",
  jsonParser,
  validateBody(checkEmailUserSchema),
  checkEmailUser
);
router.post("/login", jsonParser, validateBody(loginSchema), login);
router.post("/logout", auth, logout);
router.get("/current", auth, current);
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);
// router.post(
//   "/food-intake",
//   jsonParser,
//   // validateBody(FoodIntake),
//   foodIntake
// );
// router.post("/statistics-last-Month", jsonParser, statisticsLastMonth);

module.exports = router;
