const { json } = require('express');
const Day = require('../../schemas/day');

const currentDate = new Date();
const startOfDay = new Date(currentDate.toISOString().split('T')[0]);
const endOfDay = new Date(startOfDay);
endOfDay.setHours(23, 59, 59, 999);

const createDays = async (req, body) => {
  const userId = req.user.id;
  const day = await Day.findOne({ ownerId: userId, date: { $gte: startOfDay, $lte: endOfDay } });

  if (day) {
    return null;
  }
  const newDay = await Day.create({ ...body, ownerId: userId, date: currentDate });
  return newDay;
};
        
module.exports = createDays;