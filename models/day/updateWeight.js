const Day = require('../../schemas/day');

const currentDate = new Date();
const startOfDay = new Date(currentDate.toISOString().split('T')[0]);
const endOfDay = new Date(startOfDay);
endOfDay.setHours(23, 59, 59, 999);

const updateWeight = async (req, body) => {
  const userId = req.user.id;
  const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

  day.weight = body.weight;
  day.isChanged = true;
  const updateDay = await day.save();

  return updateDay;
};

module.exports = updateWeight;