const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const Joi = require("joi");
const { handleMongooseError } = require("../../helpers");

const foodIntakeSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		carbonohidrates: {
			type: Number,
			required: true,
		},
		protein: {
			type: Number,
			required: true,
		},
		fat: {
			type: Number,
			required: true,
		},
		calories: {
			type: Number,
			required: true,
		},
		// date: {
		//   type: String,
		//   required: true,
		// },
		meals: {
			type: String,
			required: true,
		},
		ownerId: {
			type: String,
			// ref: "User",
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

foodIntakeSchema.post("save", handleMongooseError);

const FoodIntake = model("foodIntake", foodIntakeSchema);

const newFoodIntakeSchema = Joi.object({
	name: Joi.string().required(),
	carbonohidrates: Joi.number().required(),
	protein: Joi.number().required(),
	fat: Joi.number().required(),
	calories: Joi.number().required(),
	// date: Joi.date().required(),
	meals: Joi.string().required(),
});

module.exports = { FoodIntake, newFoodIntakeSchema };
