const current = require('../../controllers/user/current');
const Day = require('../../schemas/day');
const formatDate = require('../../utils/dateutils');

const currentDate = new Date();
console.log(formatDate(currentDate));

const daysInfo = async(req) => {
    // const userId = req.user.id;
    // return await Day.find({ ownerId: userId, date: currentDate });
};

const createDays = async (req, body) => {
    console.log(body);
    // const userId = req.user.id;
    // const newDay = await Day.create({ ...body, ownerId: userId, date: currentDate });
    // return newDay;
    const newDay = await Day.create({ ...body, date: currentDate});
    return newDay;
};

const updateDays = async (dateToUpdate, updatedData) => {
    const updatedDay = await Day.findOneAndUpdate({ date: dateToUpdate }, { $set: updatedData }, { new: true });

    if (!updatedDay) {
            return null;
    };

    return updatedDay;
    // const userId = req.user.id;
    // const updateDay = await Day.findOneAndUpdate(dayId, body, { new: true }).where({ ownerId: userId });
    // return updateDay;
    
};

module.exports = {
    daysInfo,
    createDays,
    updateDays,
};