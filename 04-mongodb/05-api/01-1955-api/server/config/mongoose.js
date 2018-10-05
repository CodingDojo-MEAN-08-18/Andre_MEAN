const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const mp = path.resolve('server', 'models');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/1955', { userNewUrlParser: true });
mongoose.connection.on('connected', () => console.log("Mongoose is on"));

fs.readdirSync(mp).forEach(file => {
    if (file.indexOf('.js') >= 0) {
        require(mp + '/' + file);
    };
});