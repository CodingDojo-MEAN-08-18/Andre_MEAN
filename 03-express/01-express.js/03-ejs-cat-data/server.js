var express = require('express');
var app = express();
var port = 8000;

app.use(express.static('${__dirname}/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/cats', function(req, res) {
    var catsS = [
        { 'name': 'Simba', 'source': '/images/cat1.jpg' },
        { 'name': 'Tigger', 'source': '/images/cat2.jpg' },
        { 'name': 'Mufasa', 'source': '/images/cat3.jpg' },
    ]
    res.render('cats', { cats: catsS });
});

app.get('/cats/simba', function(req, res) {
    var cat_simba = [
        { detail: 'High Energy' },
        { detail: 'Lovable' },
        { detail: 'Fun' },
    ];
    res.render('details', { details: cat_simba });
});

app.get('/cats/tigger', function(req, res) {
    var cat_tigger = [
        { detail: 'Low Energy' },
        { detail: 'Mean' },
        { detail: 'Lazy' },
    ];
    res.render('details', { details: cat_tigger });
});

app.get('/cats/mufasa', function(req, res) {
    var cat_mufasa = [
        { detail: 'Average Energy' },
        { detail: 'Silly' },
        { detail: 'Likes to play' },
    ];
    res.render('details', { details: cat_mufasa });
});

app.listen(port, function() {
    console.log('We are listeneing on port ${port}')
});