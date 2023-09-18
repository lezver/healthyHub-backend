const daySchema = require("../../schemas/day");

const { updateSnacks } = require("../../models/day/day");

const updateSnack = async (req, res, next) => {
    try {
        const { error } = daySchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        };
        const newMeals = await updateSnacks(req, req.body);

        if (newMeals === null) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        }
        return res.status(200).json({ message: "Snack is done!" });
    } catch (error) {
        next(error);
    }
};

module.exports = updateSnack;