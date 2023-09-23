const express = require("express");

const dayController = require("../../../controllers/day");
const jsonParser = express.json();
const router = express.Router();
// const { auth } = require("../../../middlewares");

router.get("/day", dayController.dayInfo);
router.post("/day", jsonParser, dayController.createDay);
router.patch("/day/breakfast", jsonParser, dayController.updateBreakfast);
router.patch("/day/lunch", jsonParser,  dayController.updateLunch);
router.patch("/day/dinner", jsonParser,  dayController.updateDinner);
router.patch("/day/snack", jsonParser, dayController.updateSnack);
router.patch("/day/water", jsonParser, dayController.updateWater);
router.get("/day/month", dayController.monthStatistic);
router.get("/day/year", dayController.yearStatistic);
router.post("/create/year", jsonParser, dayController.createYear);
router.put("/day/breakfast/:mealsId", jsonParser, dayController.correctBreakfest);
router.put("/day/lunch/:mealsId", jsonParser, dayController.correctLunch);
router.put("/day/dinner/:mealsId", jsonParser, dayController.correctDinner);
router.put("/day/snack/:mealsId", jsonParser, dayController.correctSnack);
router.post("/food-intake", jsonParser, dayController.foodIntake);
router.put("/food-intake/:id", jsonParser, dayController.editFoodIntake);
router.post("/water-intake", jsonParser, dayController.updateWater);
router.get("/statistics", jsonParser, dayController.dayStatistics);


module.exports = router;