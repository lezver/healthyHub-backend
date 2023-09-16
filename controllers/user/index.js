const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { current } = require("./current");
const { foodIntake } = require("./foodIntake");

module.exports = { register, login, logout, current, foodIntake };
