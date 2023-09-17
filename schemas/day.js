// const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');


const daySchema = new mongoose.Schema({
    date: Date,
    calories: Number,    
    water: Number,
    weight: Number,
    // ownerId: {
    //     type: mongoose.Schema.ObjectId,
    //     required: true,
    // },
});

const Day = mongoose.model("day", daySchema);

module.exports = Day;