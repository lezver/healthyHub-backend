const daySchema = require("../../schemas/day");

const { createDays } = require("../../models/day");


const createDay = async (req, res, next) => {
    try {
        const { error } = daySchema.validate(req.body);

        if (error) {
            return res.status(400).json({message: error});
        }
        const newDay = await createDays(req, req.body);

        if (newDay === null) {
            return res.status(400).json({ message: "Day with the same date already exists" });
        }

        res.status(201).json(newDay);
    } catch (error) {
        next(error);
    }
};

module.exports = createDay;