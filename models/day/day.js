const { json } = require('express');
const ObjectId = require('mongoose').Types.ObjectId;
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

const updateDinners = async (req, body) => {
    const userId = req.user.id;
    const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

    const existingDinner = [...day.dinner];
    existingDinner.push(body);
    day.dinner = existingDinner;
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

const yearStatistics = async (req) => {
    const userId = req.user.id;
    const startOfMonth = new Date(currentDate.getFullYear(), 0, 1);
    const endOfMonth = new Date(currentDate.getFullYear(), 11, 31, 23, 59, 59, 999);

    const day = await Day.find({ ownerId: userId, date: { $gte: startOfMonth, $lte: endOfMonth } });

    return day;
}

const editBreakfest = async (req, mealsId, body) => {
    const userId = req.user.id;
    const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

    const indexToUpdate = day.breakfast.findIndex(item => item._id.equals(new ObjectId(mealsId)));

    if (indexToUpdate === -1) {
        return null;
    }
    
    day.breakfast[indexToUpdate] = body;

    const updateDay = await day.save();

    return updateDay;
};

const editLunch = async (req, mealsId, body) => {
    const userId = req.user.id;
    const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

    const indexToUpdate = day.lunch.findIndex(item => item._id.equals(new ObjectId(mealsId)));

    if (indexToUpdate === -1) {
        return null;
    }
    
    day.lunch[indexToUpdate] = body;

    const updateDay = await day.save();

    return updateDay;
};

const editDinner = async (req, mealsId, body) => {
    const userId = req.user.id;
    const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

    const indexToUpdate = day.dinner.findIndex(item => item._id.equals(new ObjectId(mealsId)));

    if (indexToUpdate === -1) {
        return null;
    }
    
    day.dinner[indexToUpdate] = body;

    const updateDay = await day.save();

    return updateDay;
};

const editSnack = async (req, mealsId, body) => {
    const userId = req.user.id;
    const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

    const indexToUpdate = day.snack.findIndex(item => item._id.equals(new ObjectId(mealsId)));

    if (indexToUpdate === -1) {
        return null;
    }
    
    day.snack[indexToUpdate] = body;

    const updateDay = await day.save();

    return updateDay;
};

module.exports = {
    daysInfo,
    createDays,
    updateBreakfasts,
    updateLunchs,
    updateDinners,
    updateSnacks,
    updateWaters,
    monthStatistics,
    yearStatistics,
    editBreakfest,
    editLunch,
    editDinner,
    editSnack,
};