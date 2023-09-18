const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../../helpers");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			match: emailRegexp,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		token: String,
		avatarURL: String,
		goal: {
			type: String,
			enum: ["Lose Fat", "Maintain", "Gain Muscle"],
			required: true,
		},
		gender: {
			type: String,
			enum: ["Male", "Female"],
			required: true,
		},
		age: {
			type: String,
			required: true,
		},
		height: {
			type: String,
			required: true,
		},
		weight: {
			type: String,
			required: true,
		},
		activity: {
			type: String,
			enum: ["1.2", "1.375", "1.55", "1.725", "1.9"],
			required: true,
		},
	},
	{ versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().pattern(emailRegexp).required(),
	password: Joi.string().min(5).required(),
	goal: Joi.string().required(),
	gender: Joi.string().required(),
	age: Joi.string().required(),
	height: Joi.string().required(),
	weight: Joi.string().required(),
	activity: Joi.string().required(),
});

const loginSchema = Joi.object({
	email: Joi.string().pattern(emailRegexp).required(),
	password: Joi.string().min(5).required(),
});

const emailSchema = Joi.object({
	email: Joi.string().required(),
});

const goalSchema = Joi.object({
	goal: Joi.string().required(),
});

const settingsSchema = Joi.object({
	name: Joi.string().required(),
	gender: Joi.string().required(),
	age: Joi.string().required(),
	height: Joi.string().required(),
	weight: Joi.string().required(),
	activity: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = {
	User,
	registerSchema,
	loginSchema,
	emailSchema,
	goalSchema,
	settingsSchema,
};
