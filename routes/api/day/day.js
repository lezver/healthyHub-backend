const express = require("express");

const dayController = require("../../../controllers/day");
const jsonParser = express.json();
const router = express.Router();

router.get("/day", dayController.dayInfo);
router.post("/day", jsonParser, dayController.createDay);
router.get("/day/month", dayController.monthStatistic);
router.get("/day/year", dayController.yearStatistic);
router.post("/food-intake", jsonParser, dayController.foodIntake);
router.put("/food-intake/:id", jsonParser, dayController.editFoodIntake);
router.post("/water-intake", jsonParser, dayController.updateWater);

module.exports = router;
