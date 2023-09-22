const daySchema = require("../../schemas/day");

const { editSnack } = require("../../models/day/day");

const correctSnack = async (req, res, next) => {
    try {
        const mealsId = req.params.mealsId;
    
        const updateSnack = await editSnack(req, mealsId, req.body);
        
        if (null) {
            return res.status(404).json({ message: "Snack not found!" });
        }
    
        res.status(200).json(updateSnack);
    } catch (error) {
        next(error);
    }
};

module.exports = correctSnack;