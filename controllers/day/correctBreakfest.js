const daySchema = require("../../schemas/day");

const { editBreakfests } = require("../../models/day/day");

const editBreakfest = async (req, res, next) => {
    try {
        const mealsId = req.params.mealsId;
    
        const updateBreakfast = await editBreakfests(req, mealsId, req.body);
        
        if (!updateBreakfast) {
            return res.status(404).json({ message: "Breakfest not found!" });
        }
    
        res.status(200).json(updateBreakfast);
    } catch (error) {
        next(error);
    }
};

module.exports = editBreakfest;