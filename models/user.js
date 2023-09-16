const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

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
		verify: {
			type: Boolean,
			default: false,
		},
		// verificationToken: {
		// 	type: String,
		// 	required: [true, "Verify token is required"],
		// },
		goal: {
			type: String,
			enum: ["Lose Fat", "Maintain", "Gain Muscle"],
		},
		gender: {
			type: String,
			enum: ["Male", "Female"],
		},
		age: Number,
		height: Number,
		weight: Number,
		activity: {
			type: Number,
			enum: [1.2, 1.375, 1.55, 1.725, 1.9],
		},
	},
	{ versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().pattern(emailRegexp).required(),
	password: Joi.string().min(5).required(),
});

const loginSchema = Joi.object({
	email: Joi.string().pattern(emailRegexp).required(),
	password: Joi.string().min(5).required(),
});

const User = model("user", userSchema);

module.exports = { User, registerSchema, loginSchema };
