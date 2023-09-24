const daysInfo = require("./daysInfo");
const { updateBreakfast, updateLunch, updateDinner, updateSnack } = require("./foodIntake");
const { editBreakfest, editLunch, editDinner, editSnack } = require("./foodIntakeId");
const updateWaters = require("./updateWaters");
const { monthStatistics, yearStatistics } = require("./statistic");
const updateWeight = require("./updateWeight");
const createDays = require("./createDays");

module.exports = {
    daysInfo,
    updateBreakfast,
    updateLunch,
    updateDinner,
    updateSnack,
    editBreakfest,
    editLunch,
    editDinner,
    editSnack,
    updateWaters,
    monthStatistics,
    yearStatistics,
    updateWeight,
    createDays,
}