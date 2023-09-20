const daySchema = require("../../schemas/day");

const { updateLunchs } = require("../../models/day/day");

const updateLunch = async (req, res, next) => {
    try {
        const { error } = daySchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        };
        const newMeals = await updateLunchs(req, req.body);

        if (newMeals === null) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        }
        return res.status(200).json(newMeals);
    } catch (error) {
        next(error);
    }
};

module.exports = updateLunch;