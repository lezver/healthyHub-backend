const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
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
    date: {
        type: Date,
        required: true,
    },
    meals: {
        type: String,
        required: true,
    },
    ownerId: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
});

const Food = model("food", foodSchema);

module.exports = Food;