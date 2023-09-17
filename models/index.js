const {
	User,
	registerSchema,
	loginSchema,
	checkEmailUserSchema,
} = require("./user");

const { FoodIntake } = require("./foodIntake");

module.exports = {
	User,
	registerSchema,
	loginSchema,
	checkEmailUserSchema,
	FoodIntake,
};
