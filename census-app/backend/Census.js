const mongoose = require('mongoose');

const CensusSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    censusTakerName: {
        type: String,
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
    householdState: {
        type: String,
        required: true
    },
    householdCity: {
        type: String,
        required: true
    },
    householdAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true }
    }
});

module.exports = mongoose.model('Census', CensusSchema);
