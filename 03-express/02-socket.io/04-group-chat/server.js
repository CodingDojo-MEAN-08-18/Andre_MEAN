const express = require('express');
const bp = require('body-parser');
const path = require('path');
const port = process.env.PORT || 6789;

const app = express();
const server = app.listen(port, () => console.log(`Express server listening on port ${port}`));

app.set('port', port);

app.use(bp.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

const io = require('socket.io').listen(server);
const users = [];
const mess = [];


io.sockets.on('connection', function(socket) {

    socket.on('new', function(data) {
        if (userExist(data.user) === true) {
            socket.emit('userNotAvailable', { error: 'User with that name already exists. Please use a diffent name' })
        } else {
            users.push(data.user);
            socket.emit('loadMessages', { currUser: data.user, mess: mess })
        }
    });

    socket.on('newMessage', function(data) {;
        mess.push({ name: data.user, message: data.message });
        io.emit('newPost', { newmessage: data.message, user: data.user })
    });
});

function userExist(user) {
    count = user.length;
    for (let x = 0; x < count; x++) {
        if (user == users[x]) {
            return true;
        }
    }
    return false;
}