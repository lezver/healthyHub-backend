const ObjectId = require('mongoose').Types.ObjectId;
const Day = require('../../schemas/day');

const currentDate = new Date();
const startOfDay = new Date(currentDate.toISOString().split('T')[0]);
const endOfDay = new Date(startOfDay);
endOfDay.setHours(23, 59, 59, 999);

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
    editBreakfest,
    editLunch,
    editDinner,
    editSnack,
};