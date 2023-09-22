const daySchema = require("../../schemas/day");

const { editDinner } = require("../../models/day/day");

const correctDinner = async (req, res, next) => {
    try {
        const mealsId = req.params.mealsId;
    
        const updateDinner = await editDinner(req, mealsId, req.body);
        
        if (null) {
            return res.status(404).json({ message: "Dinner not found!" });
        }
    
        res.status(200).json(updateDinner);
    } catch (error) {
        next(error);
    }
};

module.exports = correctDinner;