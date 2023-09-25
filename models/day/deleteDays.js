const ObjectId = require('mongoose').Types.ObjectId;
const Day = require('../../schemas/day');

const deleteDays = async (id) => {
  const dayInfo = await Day.deleteMany({ ownerId: id });
  return;
};

module.exports = deleteDays;