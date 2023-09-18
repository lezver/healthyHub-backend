const daySchema = require("../../schemas/day");

const { updateDays } = require("../../models/day/day");

// const currentDate = new Date();

const updateDay = async (req, res, next) => {
    try {
        // const dateToUpdate = formatDate(currentDate);
        // const dayId = req.params.dayId;
        const { error } = daySchema.validate(req.body);
        
        const updatedDay = await updateDays(req.body);

        if (!updatedDay || updatedDay.length === 0) {
            return res.status(404).json({ message: "Day not found" });
        }

        res.status(200).json(updatedDay);
    } catch (error) {
        next(error);
    }
};

module.exports = updateDay;