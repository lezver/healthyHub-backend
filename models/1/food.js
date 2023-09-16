const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
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

module.exports = mongoose.model("food", foodSchema);