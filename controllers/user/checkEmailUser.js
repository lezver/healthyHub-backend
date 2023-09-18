const { wrapperError } = require("../../helpers");
const { User } = require("../../models/user");

const checkEmailUser = async (req, res) => {
	const { email } = req.body;

	await User.findOne({ email }).exec();

	return res.status(200).send({ message: "Email not used" });
};

module.exports = { checkEmailUser: wrapperError(checkEmailUser) };
