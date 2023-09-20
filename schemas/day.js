// const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');


const daySchema = new mongoose.Schema({
    date: Date,
    calories: Number,    
    water: Number,
    weight: Number,
    carbonohidrates: Number,
    protein: Number,
    fat: Number,
    calories: Number,
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
    diner: [{
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
    // {
    //     type: mongoose.Schema.ObjectId,
    //     required: true,
    // },
},
{ versionKey: false }
);

const Day = mongoose.model("day", daySchema);

module.exports = Day;