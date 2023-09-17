const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models");
const { FoodIntake } = require("../../models/foodIntake");
// const bcrypt = require("bcrypt");

const foodIntake = async (req, res) => {
	const {
		name,
		carbonohidrates,
		protein,
		fat,
		calories,
		date,
		meals,
		ownerId,
	} = req.body;

	const checkUser = await User.find({ _id: ownerId }).exec();

	if (!checkUser[0]) throw httpError(409, "User not found");

	await FoodIntake.create({
		name,
		carbonohidrates,
		protein,
		fat,
		calories,
		date,
		meals,
		ownerId,
	});

	return res.status(201).send({ meals, carbonohidrates, protein, fat });
};

module.exports = { foodIntake: wrapperError(foodIntake) };
