const { wrapperError, httpError, sendEmail } = require("../../helpers");
const { User } = require("../../models");
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
	const { email } = req.body;

	const checkEmailUser = await User.findOne({ email }).exec();
	if (!checkEmailUser) throw httpError(401, "Email not found");
	if (checkEmailUser.verify)
		throw httpError(400, "Varification has already been passed");

	const verifyEmail = {
		to: email,
		subject: "Verify email",
		html: `
		<p>To confirm your registration, please click on the link below:</p>
		<a target="_blank" href="${BASE_URL}/api/user/verify/${checkEmailUser.verificationToken}">Click me</a>
		`,
		text: `To confirm your registration, please click on the link below:\n
		${BASE_URL}/api/user/verify/${checkEmailUser.verificationToken}`,
	};

	await sendEmail(verifyEmail);

	return res.status(200).send({ message: "Verify email send success" });
};

module.exports = { resendVerifyEmail: wrapperError(resendVerifyEmail) };
