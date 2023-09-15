const { wrapperError } = require("../../helpers");

const register = async (req, res) => {
	return res.status(200).send({ message: "register" });
};

module.exports = { register: wrapperError(register) };
