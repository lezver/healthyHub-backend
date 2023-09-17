const express = require("express");
const {
  register,
  login,
  logout,
  current,
  foodIntake,
} = require("../../controllers/user");
const { validateBody } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../models");
const { FoodIntake } = require("../../models/foodIntake");
const {
  statisticsLastMonth,
} = require("../../controllers/user/statisticsLastMonth");
const router = express.Router();
const jsonParser = express.json();

router.post("/register", jsonParser, validateBody(registerSchema), register);
router.post("/login", jsonParser, validateBody(loginSchema), login);
router.post("/logout", logout);
router.get("/current", current);
router.post("/day", jsonParser, dayController.createDay);
router.put("/day", jsonParser, dayController.updateDay);
router.post(
  "/food-intake",
  jsonParser,
  // validateBody(FoodIntake),
  foodIntake
);
router.post("/statistics-last-Month", jsonParser, statisticsLastMonth);

module.exports = router;
