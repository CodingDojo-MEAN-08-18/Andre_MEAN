const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restfulTaskAPI');
mongoose.Promise = global.Promise
mongoose.connection.on('connected', () => console.log('Mongoose is connected!'))

module.exports = mongoose;