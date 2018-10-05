const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    getTasks: function(req, res) {
        Task.find({}, function(err, tasks) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json(tasks);
            }
        });
    },

    getOne: function(req, res) {
        Task.findOne({ _id: req.params.id }, function(err, task) {
            if (err) {
                res.json(err);
            } else {
                res.json(task);
            }
        });
    },

    newTask: function(req, res) {
        Task.create({ title: req.body.title, description: req.body.description }, function(err) {
            if (err) {
                res.json(err);
            } else {
                res.redirect('/tasks');
            }
        });
    },

    update: function(req, res) {
        Task.findById({ _id: mongoose.Types.ObjectId(req.params.id) }, function(err, task) {
            if (err) {
                res.json(err);
            } else {
                if (typeof req.body.title != "undefined") {
                    task.title = req.body.title;
                    task.save(function(err) {
                        if (err) {
                            res.json(err);
                        }
                    });
                }
                if (typeof req.body.description != "undefined") {
                    task.description = req.body.description;
                    task.save(function(err) {
                        if (err) {
                            res.json(err);
                        }
                    });
                }
            }
        });
        res.redirect('/tasks');
    },

    delete: function(req, res) {
        Task.deleteOne({ _id: req.params.id }, function(err) {
            if (err) {
                res.json(err);
            } else {
                res.redirect('/tasks');
            }
        });
    }

};