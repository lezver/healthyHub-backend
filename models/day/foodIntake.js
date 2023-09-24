const Day = require('../../schemas/day');

const currentDate = new Date();
const startOfDay = new Date(currentDate.toISOString().split('T')[0]);
const endOfDay = new Date(startOfDay);
endOfDay.setHours(23, 59, 59, 999);

const updateBreakfast = async (req, body) => {
  const userId = req.user.id;
  const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

  const existingBreakfast = [...day.breakfast];
  existingBreakfast.push(body);
  day.breakfast = existingBreakfast;
  const updatedDay = await day.save();

  return updatedDay;
};

const updateLunch = async (req, body) => {
  const userId = req.user.id;
  const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

  const existingLunch = [...day.lunch];
  existingLunch.push(body);
  day.lunch = existingLunch;
  const updatedDay = await day.save();

  return updatedDay;
};

const updateDinner = async (req, body) => {
  const userId = req.user.id;
  const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

  const existingDinner = [...day.dinner];
  existingDinner.push(body);
  day.dinner = existingDinner;
  const updatedDay = await day.save();

  return updatedDay;
};

const updateSnack = async (req, body) => {
  const userId = req.user.id;
  const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

  const existingSnack = [...day.snack];
  existingSnack.push(body);
  day.snack = existingSnack;
  const updatedDay = await day.save();

  return updatedDay;
};

module.exports = {
    updateBreakfast,
    updateLunch,
    updateDinner,
    updateSnack,
}