const daySchema = require("../../schemas/day");

const createDaysForCurrentYear = require("../../models/day/createDaysForCurrentYear ");


const createYear = async (req, res, next) => {
    try {
        const { error } = daySchema.validate(req.body);

        if (error) {
            return res.status(400).json({message: error});
        }
        const newYear = await createDaysForCurrentYear(req, req.body);

        res.status(201).json(newYear);
    } catch (error) {
        next(error);
    }
};

module.exports = createYear;