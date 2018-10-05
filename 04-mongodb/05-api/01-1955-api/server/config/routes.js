const personFiveFive = require('../controllers/people');

module.exports = function(app) {
    app.get('/', personFiveFive.index);
    app.get('/new/:name', personFiveFive.create);
    app.get('/remove/:name', personFiveFive.destroy);
    app.get('/:name', personFiveFive.show);
};