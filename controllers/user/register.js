const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
	const { name, email, password } = req.body;

	const checkEmailUser = await User.findOne({ email }).exec();

	if (checkEmailUser) throw httpError(409, "Email in use!");

	const hashPassword = await bcrypt.hash(password, 10);

	const newUser = await User.create({
		name,
		email,
		password: hashPassword,
	});

	return res.status(201).send(newUser);
};

module.exports = { register: wrapperError(register) };
