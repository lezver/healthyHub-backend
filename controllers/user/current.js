const { wrapperError } = require("../../helpers");

const current = async (req, res) => {
	return res.status(200).send({ message: "current" });
};

module.exports = { current: wrapperError(current) };
