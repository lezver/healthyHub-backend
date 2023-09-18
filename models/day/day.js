const { json } = require('express');
const current = require('../../controllers/user/current');
const Day = require('../../schemas/day');
const { updateDay } = require('../../controllers/day');
// const formatDate = require('../../utils/dateutils');

const currentDate = new Date();
// console.log(formatDate(currentDate));
const startOfDay = new Date(currentDate.toISOString().split('T')[0]);
const endOfDay = new Date(startOfDay);
endOfDay.setHours(23, 59, 59, 999);

const daysInfo = async () => {
    const dayInfo = await Day.find({ date: { $gte: startOfDay, $lte: endOfDay } });

    return dayInfo;
    // const userId = req.user.id;
    // return await Day.find({ ownerId: userId, date: currentDate });
};

const createDays = async (req, body) => {
    // const userId = req.user.id;
    // const newDay = await Day.create({ ...body, ownerId: userId, date: currentDate });
    // return newDay;
    const day = await Day.find({ date: { $gte: startOfDay, $lte: endOfDay } });
    if (day.length !== 0) {
        return null;
    }
    const newDay = await Day.create({ ...body, date: currentDate});
    return newDay;
};

const updateDays = async (req, body) => {
    const updatedDay = await Day.find({ date: { $gte: startOfDay, $lte: endOfDay } });

    return updatedDay;
    // const userId = req.user.id;
    // const updateDay = await Day.findOneAndUpdate(dayId, body, { new: true }).where({ ownerId: userId });
    // return updateDay;
    
};

const updateBreakfasts = async(req, body) => {
    const day = await Day.findOne({ date: { $gte: startOfDay, $lte: endOfDay } });

    const existingBreakfast = [...day.breakfast];
    console.log(existingBreakfast);
    existingBreakfast.push(body);
    day.breakfast = existingBreakfast;
    const updatedDay = await day.save();

    return updatedDay;
};

const updateLunchs = async(req, body) => {
    const day = await Day.findOne({ date: { $gte: startOfDay, $lte: endOfDay } });

    const existingLunch = [...day.lunch];
    existingLunch.push(body);
    day.lunch = existingLunch;
    const updatedDay = await day.save();

    return updatedDay;
};

const updateDiners = async(req, body) => {
    const day = await Day.findOne({ date: { $gte: startOfDay, $lte: endOfDay } });

    const existingDiner = [...day.diner];
    existingDiner.push(body);
    day.diner = existingDiner;
    const updatedDay = await day.save();

    return updatedDay;
};

const updateSnacks = async(req, body) => {
    const day = await Day.findOne({ date: { $gte: startOfDay, $lte: endOfDay } });

    const existingSnack = [...day.snack];
    existingSnack.push(body);
    day.snack = existingSnack;
    const updatedDay = await day.save();

    return updatedDay;
};

module.exports = {
    daysInfo,
    createDays,
    updateDays,
    updateBreakfasts,
    updateLunchs,
    updateDiners,
    updateSnacks,
};