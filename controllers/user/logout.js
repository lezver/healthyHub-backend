const { wrapperError } = require("../../helpers");

const logout = async (req, res) => {
	return res.status(200).send({ message: "logout" });
};

module.exports = { logout: wrapperError(logout) };
