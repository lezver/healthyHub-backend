const express = require("express");

const dayController = require("../../../controllers/day");
const jsonParser = express.json();
const router = express.Router();

router.get("/day", jsonParser, dayController.dayInfo);
router.post("/day", jsonParser, dayController.createDay);
router.put("/day", jsonParser, dayController.updateDay);

module.exports = router;