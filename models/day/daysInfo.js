const Day = require('../../schemas/day');

const currentDate = new Date();
const startOfDay = new Date(currentDate.toISOString().split('T')[0]);
const endOfDay = new Date(startOfDay);
endOfDay.setHours(23, 59, 59, 999);

const daysInfo = async (req) => {
  const userId = req.user.id;
  const dayInfo = await Day.find({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

  return dayInfo;
};

module.exports = daysInfo;