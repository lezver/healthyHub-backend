const { json } = require('express');
// const current = require('../../controllers/user/current');
const Day = require('../../schemas/day');

const currentDate = new Date();
const startOfDay = new Date(currentDate.toISOString().split('T')[0]);
const endOfDay = new Date(startOfDay);
endOfDay.setHours(23, 59, 59, 999);

const daysInfo = async (req) => {
    const userId = req.user.id;
    const dayInfo = await Day.find({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

    return dayInfo;
    // const userId = req.user.id;
    // return await Day.find({ ownerId: userId, date: currentDate });
};

const createDays = async (req, body) => {
    const userId = req.user.id;
    // const newDay = await Day.create({ ...body, ownerId: userId, date: currentDate });
    // return newDay;
    const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });
    console.log(day);
    if (day) {
        return null;
    }
    const newDay = await Day.create({ ...body, ownerId: userId, date: currentDate});
    return newDay;
};

const updateBreakfasts = async (req, body) => {
    const userId = req.user.id;
    const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

    const existingBreakfast = [...day.breakfast];
    existingBreakfast.push(body);
    day.breakfast = existingBreakfast;
    const updatedDay = await day.save();

    return updatedDay;
};

const updateLunchs = async (req, body) => {
    const userId = req.user.id;
    const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

    const existingLunch = [...day.lunch];
    existingLunch.push(body);
    day.lunch = existingLunch;
    const updatedDay = await day.save();

    return updatedDay;
};

const updateDiners = async (req, body) => {
    const userId = req.user.id;
    const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

    const existingDiner = [...day.diner];
    existingDiner.push(body);
    day.diner = existingDiner;
    const updatedDay = await day.save();

    return updatedDay;
};

const updateSnacks = async (req, body) => {
    const userId = req.user.id;
    const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

    const existingSnack = [...day.snack];
    existingSnack.push(body);
    day.snack = existingSnack;
    const updatedDay = await day.save();

    return updatedDay;
};

const updateWaters = async (req, body) => {
    const userId = req.user.id;
    const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });
    if (day.length === 0) {
        return null;
    }
    const currentWater = day.water || 0;
    const amountToAdd = parseFloat(body.water);
    const updateWater = currentWater + amountToAdd;

    day.water = updateWater;
    const updateDay = await day.save();

    return updateDay;
};

const monthStatistics = async (req) => {
    const userId = req.user.id;
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 23, 59, 59, 999);
    const day = await Day.find({ ownerId: userId, date: { $gte: startOfMonth, $lte: endOfMonth } });

    return day;
}

const yearStatistics = async () => {
    const userId = req.user.id;
    const startOfMonth = new Date(currentDate.getFullYear(), 0, 1);
    const endOfMonth = new Date(currentDate.getFullYear(), 11, 31, 23, 59, 59, 999);

    const day = await Day.find({ ownerId: userId, date: { $gte: startOfMonth, $lte: endOfMonth } });

    return day;
}

module.exports = {
    daysInfo,
    createDays,
    updateBreakfasts,
    updateLunchs,
    updateDiners,
    updateSnacks,
    updateWaters,
    monthStatistics,
    yearStatistics,
};