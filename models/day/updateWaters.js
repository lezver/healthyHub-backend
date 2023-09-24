const Day = require('../../schemas/day');

const currentDate = new Date();
const startOfDay = new Date(currentDate.toISOString().split('T')[0]);
const endOfDay = new Date(startOfDay);
endOfDay.setHours(23, 59, 59, 999);

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

module.exports = updateWaters;