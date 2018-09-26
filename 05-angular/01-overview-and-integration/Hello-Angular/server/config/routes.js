const tasks = require('./../controllers/tasks.js');

module.exports = function(app) {
    app.get('/tasks', function(req, res) {
        tasks.getAll(req, res);
    });

    app.get('/tasks/:id', function(req, res) {
        tasks.getOne(req, res);
    });

    app.put('/tasks/:id', function(req, res) {
        tasks.update(req, res)
    });

    app.post('/tasks', function(req, res) {
        tasks.newTask(req, res);
    });

    app.delete('/tasks/:id', function(req, res) {
        tasks.delete(req, res);
    });
};