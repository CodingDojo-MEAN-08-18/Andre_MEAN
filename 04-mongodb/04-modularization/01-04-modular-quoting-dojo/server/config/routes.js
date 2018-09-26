var mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
const quotes = require('../controllers/quotes.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        quotes.index(req, res)
    });

    app.get('/quotes', function(req, res) {
        quotes.get_quotes(req, res);
    });

    app.post('/quotes', function(req, res) {
        quotes.post_quote(res, req);
    });

    app.get('/delete/:id', function(req, res) {
        quotes.delete_quote(req, res, req.params.id);
    });

};