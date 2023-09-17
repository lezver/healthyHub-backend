const daySchema = require("../../schemas/day");

const { updateDays } = require("../../models/day/day");
const formatDate = require('../../utils/dateutils');

const currentDate = new Date();

const updateDay = async (req, res, next) => {
    try {
        const dateToUpdate = formatDate(currentDate);
        // const dayId = req.params.dayId;
        const { error } = daySchema.validate(req.body);
        
        const editDay = await updateDays(dateToUpdate, req.body);

        if (!editDay) {
            return res.status(404).json({ message: "Day not found" });
        }

        res.status(200).json(editDay);
    } catch (error) {
        next(error);
    }
};

module.exports = updateDay;