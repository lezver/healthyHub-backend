const daySchema = require("../../schemas/day");

const { editBreakfest, editLunch, editDinner, editSnack } = require("../../models/day");

const editFoodIntake = async (req, res, next) => {
    try {
        const mealsId = req.params.id;
        console.log(mealsId)

        const { error } = daySchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        };

        const { mealType } = req.body;

        if (mealType === "breakfast") {
            const newMeals = await editBreakfest(req, mealsId, req.body);
            return res.status(200).json(newMeals);
        } else if (mealType === "lunch") {
            const newMeals = await editLunch(req, mealsId, req.body);
            return res.status(200).json(newMeals);
        } else if (mealType === "dinner") {
            const newMeals = await editDinner(req, mealsId, req.body);
            return res.status(200).json(newMeals);
        } else if (mealType === "snack") {
            const newMeals = await editSnack(req, mealsId, req.body);
            return res.status(200).json(newMeals);
        } else {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = editFoodIntake;