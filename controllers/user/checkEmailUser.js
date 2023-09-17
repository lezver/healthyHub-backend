const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models/user");

const checkEmailUser = async (req, res) => {
	const { email } = req.body;

	const checkUser = await User.findOne({ email }).exec();

	if (checkUser) throw httpError(401, "Email already used");

	return res.status(200).send({ message: "Email not used" });
};

module.exports = { checkEmailUser: wrapperError(checkEmailUser) };
