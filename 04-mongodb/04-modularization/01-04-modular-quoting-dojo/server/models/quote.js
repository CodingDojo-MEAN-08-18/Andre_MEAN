var mongoose = require("../config/mongoose.js");

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5 },
    quote: { type: String, requred: true, minlength: 10 }
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema);
const Quote = mongoose.model('Quote');

module.exports = Quote;