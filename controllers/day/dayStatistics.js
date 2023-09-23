const { calculateDayStatistics } = require("../../models/day/day");

const dayStatistics = async (req, res, next) => {
    try {
        const statistics = await calculateDayStatistics(req);
        res.status(200).json(statistics);
    } catch (error) {
        next(error);
    }
};

module.exports = dayStatistics;