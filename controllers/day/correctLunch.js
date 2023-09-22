const daySchema = require("../../schemas/day");

const { editLunch } = require("../../models/day/day");

const correctLunch = async (req, res, next) => {
    try {
        const mealsId = req.params.mealsId;
    
        const updateLunch = await editLunch(req, mealsId, req.body);
        
        if (null) {
            return res.status(404).json({ message: "Lunch not found!" });
        }
    
        res.status(200).json(updateLunch);
    } catch (error) {
        next(error);
    }
};

module.exports = correctLunch;