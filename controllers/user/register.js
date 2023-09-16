const { wrapperError, httpError, sendEmail } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const crypto = require("node:crypto");

const { BASE_URL } = process.env;

const register = async (req, res) => {
	const { name, email, password } = req.body;

	const checkEmailUser = await User.findOne({ email }).exec();

	if (checkEmailUser) throw httpError(409, "Email in use!");

	const hashPassword = await bcrypt.hash(password, 10);
	const avatarURL = gravatar.url(email);
	const verificationToken = crypto.randomUUID();

	const newUser = await User.create({
		name,
		email,
		password: hashPassword,
		avatarURL,
		verificationToken,
	});

	const verifyEmail = {
		to: email,
		subject: "Verify email",
		html: `
		<p>To confirm your registration, please click on the link below:</p>
		<a target="_blank" href="${BASE_URL}/api/user/verify/${verificationToken}">Click me</a>
		`,
		text: `To confirm your registration, please click on the link below:\n
		${BASE_URL}/api/user/verify/${verificationToken}`,
	};

	await sendEmail(verifyEmail);

	return res.status(201).send(newUser);
};

module.exports = { register: wrapperError(register) };
