const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models/user");
const { updateWeight } = require("../../models/day");

const changeSettings = async (req, res) => {
	const { _id } = req.user;
	const { name, gender, age, height, weight, activity } = req.body;

	const newWeight = await updateWeight(req, req.body);

	const changeSettingsUser = await User.findByIdAndUpdate(
		_id,
		{ name, gender, age, height, weight, activity },
		{ new: true }
	).exec();

	return res
		.status(200)
		.send({
			name: changeSettingsUser.name,
			gender: changeSettingsUser.gender,
			age: changeSettingsUser.age,
			height: changeSettingsUser.height,
			weight: changeSettingsUser.weight,
			activity: changeSettingsUser.activity,
		});
};

module.exports = { changeSettings: wrapperError(changeSettings) };
