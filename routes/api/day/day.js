const express = require("express");

const dayController = require("../../../controllers/day");
const jsonParser = express.json();
const router = express.Router();

router.get("/day", jsonParser, dayController.dayInfo);
router.post("/day", jsonParser, dayController.createDay);
router.put("/day", jsonParser, dayController.updateDay);
router.patch("/day/breakfast", jsonParser, dayController.updateBreakfast);
router.patch("/day/lunch", jsonParser,  dayController.updateLunch);
router.patch("/day/diner", jsonParser,  dayController.updateDiner);
router.patch("/day/snack", jsonParser, dayController.updateSnack);
router.patch("/day/water", jsonParser, dayController.updateWater);

module.exports = router;