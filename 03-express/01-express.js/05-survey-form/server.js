var express = require('express');
var session = require('express-session');
var path = require('path');
var bodyp = require('body-parser');
var app = express();
var port = 9000;

app.use(express.static(path.join(__dirname, '/static')));
app.use(bodyp.json());
var settings = {
    name: 'session',
    secret: 'dojo1234',
    resave: true,
    saveUninitialized: true
}

app.use(session(settings));
app.use(bodyp.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    return response.render('index')
});

app.post('/process', function(request, response) {
    result = {
        username: request.body['name'],
        location: request.body['location'],
        language: request.body['lang'],
        comment: request.body['comment'],
    }
    return response.render('result', result)
});

app.listen(port, function() {
    console.log('Listeneing to port ${port}')
});