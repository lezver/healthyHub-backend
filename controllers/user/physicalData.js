const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models");

const physicalData = async (req, res) => {
	const { email, goal, gender, age, height, weight, activity } = req.body;

	const user = await User.findOne({ email }).exec();
	if (!user) throw httpError(404, "Not found user");

	await User.findByIdAndUpdate(user._id, {
		goal,
		gender,
		age,
		height,
		weight,
		activity,
	});

	return res.status(201).send({ message: "Add physical data" });
};

module.exports = { physicalData: wrapperError(physicalData) };
