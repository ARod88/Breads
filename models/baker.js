const mongoose = require ("mongoose");
const { Schema } = mongoose;

const bakerSchema = new Schema ({
    name: { type: String, required: true, enum: ["Rachel", "Monica", "Phoebe", "Joey", "Ross", "Chandler"]},
    startDate: { type: Date, required: true }, 
    bio: { type: String },

});

const Baker = mongoose.model("Baker", bakerSchema)
module.exports = Baker;