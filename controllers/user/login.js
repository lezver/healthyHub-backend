const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const incorrect = "Email or password is wrong";

const login = async (req, res) => {
	const { email, password } = req.body;

	const compareUser = await User.findOne({ email }).exec();
	if (!compareUser) throw httpError(401, incorrect);
	if (!compareUser.verify) throw httpError(401, "Email not verified");

	const compareUserPassword = await bcrypt.compare(
		password,
		compareUser.password
	);
	if (!compareUserPassword) throw httpError(401, incorrect);

	const payload = { id: compareUser._id };

	const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

	const addTokenToUser = await User.findByIdAndUpdate(
		compareUser._id,
		{ token },
		{ new: true }
	);

	return res.status(200).send(addTokenToUser);
};

module.exports = { login: wrapperError(login) };
