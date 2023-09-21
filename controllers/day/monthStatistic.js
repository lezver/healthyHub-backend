const { monthStatistics } = require("../../models/day/day");

const monthStatistic = async (req, res, next) => {
    try {
        const newStatistic = await monthStatistics(req, req.body);
        return res.status(200).json({ newStatistic });
    } catch (error) {
        next(error);
    }
};

module.exports = monthStatistic;