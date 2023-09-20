const { wrapperError } = require("../../helpers");

const current = async (req, res) => {
	const {
		email,
		name,
		avatarURL,
		goal,
		gender,
		age,
		height,
		weight,
		activity,
		token,
	} = req.user;

	return res.status(200).send({
		email,
		name,
		avatarURL,
		goal,
		gender,
		age,
		height,
		weight,
		activity,
		token,
	});
};

module.exports = { current: wrapperError(current) };
