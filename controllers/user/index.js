const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { current } = require("./current");
const { updateAvatar } = require("./updateAvatar");
const { checkEmailUser } = require("./checkEmailUser");
const { foodIntake } = require("./foodIntake");

module.exports = {
	register,
	login,
	logout,
	current,
	updateAvatar,
	checkEmailUser,
	foodIntake,
};
