const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const dateIdeaSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    type: [{ type: String }],
    address: {
        streetNumber: Number,
        street: String,
        city: String,
        state: String,
        zip: Number
},
    phoneNumber: Number,
    img: String
}, { timestamps: true });

//  Create Model from our Schema
const DateI = mongoose.model('Date', dateIdeaSchema);

// Export Date Model
module.exports = DateI;