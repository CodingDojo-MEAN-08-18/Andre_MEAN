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

let count = 0

io.sockets.on('connection', function(socket) {

    socket.on('button_click', function(data) {
        count += 1;
        io.emit('numberUpdated', { response: count })
    });

    socket.on('reset', function() {
        count = 0;
        io.emit('updatedCount', { response: count })
    });
});