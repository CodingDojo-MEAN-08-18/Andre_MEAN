var express = require('express');
var app = express();
var port = 8000;

app.use(express.static('${__dirname}/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/cats', function(req, res) {
    var catsS = [
        { 'name': 'cat1', 'source': '/images/cat1.jpg' },
        { 'name': 'cat2', 'source': '/images/cat2.jpg' },
        { 'name': 'cat3', 'source': '/images/cat3.jpg' },
    ]
    res.render('cats', { cats: catsS });
});

app.get('/cars', function(req, res) {
    var carsS = [
        { 'name': 'car1', 'source': '/images/car1.jpg' },
        { 'name': 'car2', 'source': '/images/car2.jpg' },
        { 'name': 'car3', 'source': '/images/car3.jpg' },
    ]
    res.render('cars', { cats: carsS });
});
app.get('/cars/new', function(req, res) {
    res.render('form')
})

app.listen(port, function() {
    console.log('We are listeneing on port ${port}')
});