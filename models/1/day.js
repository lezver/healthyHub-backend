const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    },
    water: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    ownerId: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
});

module.exports = mongoose.model("day", foodSchema);