const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
    name: {
        type: String,
        require: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Person', personSchema)