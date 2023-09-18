const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models/user");

const changeSettings = async (req, res) => {
	const { _id } = req.user;
	const { name, gender, age, height, weight, activity } = req.body;

	await User.findByIdAndUpdate(
		_id,
		{ name, gender, age, height, weight, activity },
		{ new: true }
	).exec();

	return res.status(200).send({ name, gender, age, height, weight, activity });
};

module.exports = { changeSettings: wrapperError(changeSettings) };
