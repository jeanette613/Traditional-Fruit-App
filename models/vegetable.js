// Our Models
////////////////////////////////////////////////
const mongoose = require("./connection");

const { Schema, model } = mongoose;

const vegetableSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean
})

const Vegetable = model("Vegetable", vegetableSchema);

module.exports = Vegetable;