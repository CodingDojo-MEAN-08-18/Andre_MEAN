//Require modules, port, Express
const express = require('express');
const bp = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/dashboard', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Mongoose is connected'));
mongoose.Promise = global.Promise;

//schema
var WolfSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    mange: { type: String }
}, { timestamps: true });

//model
mongoose.model("Wolf", WolfSchema);
var Wolf = mongoose.model("Wolf");

// routes
app.get('/', function(req, res) {
    Wolf.find({}, function(err, Wolves) {
        if (err) {
            console.log(err);
        }
        res.render('index', { Wolves: Wolves });
    });
});

app.get('/new', function(req, res) {
    res.render('new');
});

app.post('/Wolves', function(req, res) {
    Wolf.create(req.body, function(err) {
        if (err) {
            console.log(err);
        }
    })
    res.redirect('/');
});

app.get('/Wolves/:id', function(req, res) {
    Wolf.findById(req.params.id, function(err, Wolf) {
        if (err) {
            console.log(err);
        }
        res.render('show', { Wolf: Wolf });
    });

});



app.get('/Wolves/edit/:id', function(req, res) {
    Wolf.findById(req.params.id, function(err, Wolf) {
        if (err) {
            console.log(err);
        }
        res.render('edit', { Wolf: Wolf });
    });
});

app.post('/Wolves/:id', function(req, res) {
    Wolf.update({ _id: req.params.id }, req.body, function(err, res) {
        if (err) { console.log(err); }
        console.log(res);
    });
    res.redirect('/');
});

app.post('/Wolves/destroy/:id', function(req, res) {
    Wolf.remove({ _id: req.params.id }, function(err, res) {
        if (err) { console.log(err); }
    });
    res.redirect('/');
});

//server
app.listen(6789, function() {
    console.log('listening on port 6789');
})