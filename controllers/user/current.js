const { wrapperError } = require("../../helpers");

const current = async (req, res) => {
	const { email, name } = req.user;

	return res.status(200).send({ email, name });
};

module.exports = { current: wrapperError(current) };
