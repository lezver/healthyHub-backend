const {
	User,
	registerSchema,
	loginSchema,
	physicalDataSchema,
} = require("./user");
const { FoodIntake } = require("./foodIntake");

module.exports = { User, registerSchema, loginSchema, physicalDataSchema, FoodIntake };