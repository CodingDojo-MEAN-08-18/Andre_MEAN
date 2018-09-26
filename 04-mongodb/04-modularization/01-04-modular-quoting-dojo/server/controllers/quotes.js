var mongoose = require("mongoose");
const Quote = require('../models/quote.js')

module.exports = {
    index: function(req, res) {
        return res.render("index");
    },

    get_quotes: function(res, req) {
        Quote.find({}, function(err, quotes) {
            if (err) {
                console.log(err)
            }
            req.render('quote', { quotes: quotes });
        });
    },

    post_quote: function(res, req) {
        Quote.create(req.body, function(err) {
            if (err) {
                console.log(err)
            }
        });
        res.redirect('/quotes');
    },

    delete_quote: function(res, req, id) {
        Quote.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
            if (err) {
                console.log(err)
                res.redirect('/')
            } else {
                req.redirect('/quotes');
            }
        })
    }
}