const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models/user");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
	const { name, email, password, goal, gender, age, height, weight, activity } =
		req.body;

	const checkEmailUser = await User.findOne({ email }).exec();

	if (checkEmailUser) throw httpError(409, "Email in use!");

	const hashPassword = await bcrypt.hash(password, 10);
	const avatarURL = gravatar.url(email, { s: "250", r: "g", d: "wavatar" });

	const newUser = await User.create({
		name,
		email,
		password: hashPassword,
		avatarURL,
		goal,
		gender,
		age,
		height,
		weight,
		activity,
	});

	const payload = { id: newUser._id };

	const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

	const addTokenToNewUser = await User.findByIdAndUpdate(
		newUser._id,
		{ token },
		{ new: true }
	).exec();

	return res.status(201).send({
		name: addTokenToNewUser.name,
		email: addTokenToNewUser.email,
		avatarURL: addTokenToNewUser.avatarURL,
		goal: addTokenToNewUser.goal,
		gender: addTokenToNewUser.gender,
		age: addTokenToNewUser.age,
		height: addTokenToNewUser.height,
		weight: addTokenToNewUser.weight,
		activity: addTokenToNewUser.activity,
		token: addTokenToNewUser.token,
	});
};

module.exports = { register: wrapperError(register) };
