const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { current } = require("./current");
const { updateAvatar } = require("./updateAvatar");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVerifyEmail");
const { physicalData } = require("./physicalData");
const { foodIntake } = require("./foodIntake");

module.exports = {
	register,
	login,
	logout,
	current,
	updateAvatar,
	verifyEmail,
	resendVerifyEmail,
	physicalData,
  foodIntake,
};
