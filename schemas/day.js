const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    date: Date,  
    water: Number,
    weight: Number,
    isChanged: {
        type: Boolean,
        default: false,
    },
    breakfast: [
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
        },],
    lunch: [{
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
        },],
    dinner: [{
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
        },],
    snack: [{
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
        },],
    ownerId: mongoose.Schema.ObjectId,
},
{ versionKey: false }
);

const Day = mongoose.model("day", daySchema);

module.exports = Day;