const express = require("express");

const dayController = require("../../../controllers/day");
const jsonParser = express.json();
const router = express.Router();
const { auth } = require("../../../middlewares");

router.get("/day", auth, dayController.dayInfo);
router.post("/day", auth, jsonParser, dayController.createDay);
router.patch("/day/breakfast", auth, jsonParser, dayController.updateBreakfast);
router.patch("/day/lunch", auth, jsonParser,  dayController.updateLunch);
router.patch("/day/diner", auth, jsonParser,  dayController.updateDiner);
router.patch("/day/snack", auth, jsonParser, dayController.updateSnack);
router.patch("/day/water", auth, jsonParser, dayController.updateWater);
router.get("/day/moth", auth, dayController.monthStatistic);
router.get("/day/year", auth, dayController.yearStatistic);

module.exports = router;