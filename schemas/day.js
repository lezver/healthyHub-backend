// const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');


const daySchema = new mongoose.Schema({
    date: Date,
    calories: Number,    
    water: [],
    weight: Number,
    isChanged: {
        type: Boolean,
        default: false,
    },
    breakfast: [],
    lunch: [],
    diner: [],
    snack: [],
    // ownerId: {
    //     type: mongoose.Schema.ObjectId,
    //     required: true,
    // },
},
{ versionKey: false }
);

const Day = mongoose.model("day", daySchema);

module.exports = Day;