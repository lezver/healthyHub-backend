const daySchema = require("../../schemas/day");

const { updateDinners } = require("../../models/day/day");

const updateDinner = async (req, res, next) => {
    try {
        const { error } = daySchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        };
        const newMeals = await updateDinners(req, req.body);

        if (newMeals === null) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        }
        return res.status(200).json(newMeals);
    } catch (error) {
        next(error);
    }
};

module.exports = updateDinner;