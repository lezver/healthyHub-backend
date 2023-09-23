const express = require("express");

const dayController = require("../../../controllers/day");
const jsonParser = express.json();
const router = express.Router();
const { auth } = require("../../../middlewares");

router.get("/day", auth, dayController.dayInfo);
router.post("/day", auth, jsonParser, dayController.createDay);
router.patch("/day/breakfast", auth, jsonParser, dayController.updateBreakfast);
router.patch("/day/lunch", auth, jsonParser,  dayController.updateLunch);
router.patch("/day/dinner", auth, jsonParser,  dayController.updateDinner);
router.patch("/day/snack", auth, jsonParser, dayController.updateSnack);
router.patch("/day/water", auth, jsonParser, dayController.updateWater);
router.get("/day/month", auth, dayController.monthStatistic);
router.get("/day/year", auth, dayController.yearStatistic);
router.post("/create/year", auth, jsonParser, dayController.createYear);
router.put("/day/breakfast/:mealsId", auth, jsonParser, dayController.correctBreakfest);
router.put("/day/lunch/:mealsId", auth, jsonParser, dayController.correctLunch);
router.put("/day/dinner/:mealsId", auth, jsonParser, dayController.correctDinner);
router.put("/day/snack/:mealsId", auth, jsonParser, dayController.correctSnack);


module.exports = router;