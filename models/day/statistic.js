const Day = require('../../schemas/day');
const currentDate = new Date();

const monthStatistics = async (req) => {
  const userId = req.user.id;
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 23, 59, 59, 999);
  const day = await Day.find({ ownerId: userId, date: { $gte: startOfMonth, $lte: endOfMonth } });

  return day;
};

const yearStatistics = async (req) => {
  const userId = req.user.id;
  const startOfMonth = new Date(currentDate.getFullYear(), 0, 1);
  const endOfMonth = new Date(currentDate.getFullYear(), 11, 31, 23, 59, 59, 999);

  const day = await Day.find({ ownerId: userId, date: { $gte: startOfMonth, $lte: endOfMonth } });

  return day;
};

module.exports = {
  monthStatistics,
  yearStatistics,
}