const { yearStatistics } = require("../../models/day");

const yearStatistic = async (req, res, next) => {
    try {
        const newStatistic = await yearStatistics(req, req.body);
        return res.status(200).json({ newStatistic });
    } catch (error) {
        next(error);
    }
};

module.exports = yearStatistic;