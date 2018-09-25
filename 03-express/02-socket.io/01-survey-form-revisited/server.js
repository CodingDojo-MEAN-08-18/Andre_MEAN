const express = require('express');
const bp = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();
const server = app.listen(port, () => console.log(`Express server listening on port ${port}`));

app.use(express.static(path.join(__dirname, './static')));
app.use(bp.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.set('port', port);

const io = require('socket.io').listen(server);

app.get('/', function(req, res) {
    res.render('index');
});
io.sockets.on('connection', function(socket) {

    socket.on('posting_form', function(data) {
        console.log('generating random number');

        var emit_name = "server_response";
        socket.emit(emit_name, data);

        const random_number = Math.floor((Math.random() * 1000) + 1);

        var emit_name = "random_number";

        socket.emit(enit_name, random_number);
    });
});