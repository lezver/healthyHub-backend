const daySchema = require("../../schemas/day");

const { updateWaters } = require("../../models/day/day");

const updateWater = async (req, res, next) => {
    try {
        const { error } = daySchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        }
        const newWater = await updateWaters(req, req.body);

        if (newWater === null) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        }
        return res.status(200).json(newWater);
    } catch (error) {
        next(error);
    }
};

module.exports = updateWater;