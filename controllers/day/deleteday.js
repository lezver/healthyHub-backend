const daySchema = require("../../schemas/day");

const { deleteDays } = require("../../models/day");

const deleteDay = async (req, res, next) => {
    try {
        const id = req.params.id;
        const daydel = await deleteDays(id);
        return;
    } catch (error) {
        next(error);
    }
}

module.exports = deleteDay;