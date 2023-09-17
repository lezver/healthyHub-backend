const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models");

const verifyEmail = async (req, res) => {
	const { verificationToken } = req.params;

	const checTokenUser = await User.findOne({ verificationToken }).exec();
	if (!checTokenUser) throw httpError(404, "User not found");

	await User.findByIdAndUpdate(checTokenUser._id, {
		verify: true,
		verificationToken: null,
	}).exec();

	return res.status(200).send({ message: "Verification successful" });
};

module.exports = { verifyEmail: wrapperError(verifyEmail) };
