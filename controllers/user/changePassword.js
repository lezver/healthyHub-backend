const { wrapperError, httpError, sendEmail } = require("../../helpers");
const { User } = require("../../models/user");
const bcrypt = require("bcrypt");
const generator = require("generate-password");

const changePassword = async (req, res) => {
	const { email } = req.body;

	const checkUser = await User.findOne({ email }).exec();

	if (!checkUser) throw httpError(404, "Not found");

	const newPassword = generator.generate({
		length: 10,
		numbers: true,
	});

	const hashNewPassword = await bcrypt.hash(newPassword, 10);

	await User.findByIdAndUpdate(checkUser._id, { password: hashNewPassword });

	const verifyEmail = {
		to: email,
		subject: "New password",
		html: `<p>This is your new password : ${newPassword}</p>`,
		text: `This is your new password : ${newPassword}`,
	};

	await sendEmail(verifyEmail);

	return res.status(200).send({
		message: `New password send on your Email:${email}`,
	});
};

module.exports = { changePassword: wrapperError(changePassword) };
