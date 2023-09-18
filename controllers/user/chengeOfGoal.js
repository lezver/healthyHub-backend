const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models/user");

const chengeOfGoal = async (req, res) => {
	const { _id } = req.user;
	const { goal } = req.body;

	await User.findByIdAndUpdate(_id, { goal }, { new: true }).exec();

	return res.status(200).send({ message: goal });
};

module.exports = { chengeOfGoal: wrapperError(chengeOfGoal) };
