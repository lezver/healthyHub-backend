const daySchema = require("../../schemas/day");

const { daysInfo } = require("../../models/day/day");

const dayInfo = async (req, res, next) => {
    try {
        const dayData = await daysInfo(req);
        if (!dayData || dayData.length === 0) {
            return res.status(202).json({ message: "Day not found!" });
        }
        res.status(200).json(dayData);
    } catch (error) {
        next(error);
    }
};

module.exports = dayInfo;