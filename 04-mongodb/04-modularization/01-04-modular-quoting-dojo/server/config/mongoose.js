const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.connection.on('connected', () => console.log('Mongoose is connected!'))
mongoose.Promise = global.Promise;

module.exports = mongoose;