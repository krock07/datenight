const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const dateIdeaSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    address: {
        street: Number,
        city: String,
        state: String,
        zip: Number
    },
    phoneNumber: Number
}, { timestamps: true });

//  Create Model from our Schema
const DateI = mongoose.model('Date', dateIdeaSchema);

// Export Date Model
module.exports = DateI;