const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { current } = require("./current");
const { updateAvatar } = require("./updateAvatar");
const { checkEmailUser } = require("./checkEmailUser");
const { changeOfGoal } = require("./changeOfGoal");
const { changeSettings } = require("./changeSettings");
const { changePassword } = require("./changePassword");

module.exports = {
	register,
	login,
	logout,
	current,
	updateAvatar,
	checkEmailUser,
	changeOfGoal,
	changeSettings,
	changePassword,
};
