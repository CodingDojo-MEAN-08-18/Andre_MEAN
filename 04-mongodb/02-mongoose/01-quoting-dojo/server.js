var express = require("express");
var bodyp = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

var app = express();
var port = 8000;

app.use(express.static(path.join(__dirname, "/static")));
app.use(bodyp.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/QuotingDojo');

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5 },
    quote: { type: String, requred: true, minlength: 10 }
}, { timestamps: true });
var Quotes = mongoose.model("quotes", QuoteSchema);

app.get("/", function(request, response) {
    console.log(request.body);
    return response.render("index");
});

app.get("/quote", function(request, response) {
    Quotes.find({}, function(err, quotes) {
        if (err) {
            console.log(err);
        }
        return response.render('quotes', { quotes: quotes });
    });
});

app.post('/quote', function(request, response) {
    console.log(request.body)
    Quotes.create(request.body, function(err) {
        if (err) {
            console.log(err)
        };
        return response.redirect('/quote');
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});