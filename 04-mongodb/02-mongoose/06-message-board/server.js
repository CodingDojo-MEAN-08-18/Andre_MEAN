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

mongoose.connect('mongodb://localhost/messageBoard', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Mongoose is connected'));
mongoose.Promise = global.Promise;

//schema
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
    _comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

MessageSchema.path('name').required(true, "Name can't be blank!");
MessageSchema.path('message').required(true, "Message can't be blank!");
mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message");

var CommentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    _message: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
}, { timestamps: true });
CommentSchema.path('name').required(true, "Name can't be blank!");
CommentSchema.path('comment').required(true, "Message can't be blank!");
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");


// routes
app.get('/', function(req, res) {
    Message.find({}).populate('_comments').exec(function(err, messages) {
        res.render('index', { messages: messages });
    });
});

app.post('/message', function(req, res) {
    var newMess = new Message({ name: req.body.name, message: req.body.message });
    newMess.save(function(err) {
        if (err) {
            console.log(err);
            res.render('index', { errors: newMess.errors });
        }
    });
    res.redirect('/');
});

app.post('/comment', function(req, res) {
    Message.findOne({ _id: req.body.id }, function(err, message) {
        var newComm = new Comment({ name: req.body.name, comment: req.body.comment });
        newComm._message = message._id;
        Message.update({ _id: message._id }, { $push: { _comments: newComm } }, function(err) {

        });
        newComm.save(function(err) {
            if (err) {
                console.log(err);
                res.render('/index', { errors: newComm.errors });
            }
        });

    });
    res.redirect('/');
});


//server
app.listen(6789, function() {
    console.log('listening on port 6789');
})