const daySchema = require("../../schemas/day");

const { updateBreakfast, updateLunch, updateDinner, updateSnack } = require("../../models/day");

const foodIntake = async (req, res, next) => {
    try {
        const { error } = daySchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        };

        const { mealType } = req.body;

        if (mealType === "breakfast") {
            const newMeals = await updateBreakfast(req, req.body);
            return res.status(200).json(newMeals);
        } else if (mealType === "lunch") {
            const newMeals = await updateLunch(req, req.body);
            return res.status(200).json(newMeals);
        } else if (mealType === "dinner") {
            const newMeals = await updateDinner(req, req.body);
            return res.status(200).json(newMeals);
        } else if (mealType === "snack") {
            const newMeals = await updateSnack(req, req.body);
            return res.status(200).json(newMeals);
        } else {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        }

    } catch (error) {
        next(error);
    }
};

module.exports = foodIntake;