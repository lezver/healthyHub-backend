const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: String,
    token: String,
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
    },
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
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    activity: {
        type: Number,
        enum: ["1.2", "1.375", "1.55", "1.725", "1.9"],
        required: true,
    },
});

module.exports = mongoose.model("User", userSchema);