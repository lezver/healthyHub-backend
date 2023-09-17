const { wrapperError } = require("../../helpers");
const { User } = require("../../models");

const logout = async (req, res) => {
	const { _id } = req.user;

	await User.findByIdAndUpdate(_id, { token: "" });

	return res.status(204).end();
};

module.exports = { logout: wrapperError(logout) };
