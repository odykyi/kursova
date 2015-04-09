////var models = require('./categoryDB');
//var dbController = require('../dbController');
//
//module.exports = {
//    index: function(req, res) {
//        var query1selectdata;
//        connection.connect(function(err) {
//            if (err) {
//                console.error('error connecting: ' + err.stack);
//                return;
//            }
//            console.log('connected as id ' + connection.threadId);
//        });
//
//        var connectionQuery = 'SELECT * from users';
//        connection.query(connectionQuery, function(err, rows, fields) {
//            if (!err) {
//                query1selectdata = rows;
//                console.log(query1selectdata);
//                var dataquery1 = JSON.stringify(query1selectdata);
//                res.json(dataquery1);
//                res.end()
//            } else{ console.log('Error while performing DB Query.'); }
//        });
//        connection.end(function(err) {
//            console.log(err)
//        });
//
//    },
//    country: function(req, res) {
//
//        var connectionQuery = 'SELECT country from users';
//        dbController(req, res, connectionQuery)
//
//    },
//    add: function(req, res) {
//        var newCategory = new models.Category(req.body);
//        newCategory.save(function(err, category) {
//            if (err) {
//                res.json({error: 'Error adding category.'});
//            } else {
//                res.json(category);
//            }
//        });
//    },
//    update: function(req, res) {
//        console.log(req.body);
//        models.Category.update({ _id: req.params.id }, req.body, function(err, updated) {
//            if (err) {
//                res.json({error: 'Category not found.'});
//            } else {
//                res.json(updated);
//            }
//        })
//    },
//    delete: function(req, res) {
//        models.Category.findOne({ _id: req.params.id }, function(err, category) {
//            if (err || !category) {
//                res.json({error: 'Category not found.'});
//            } else {
//                category.remove(function(err, category){
//                    res.json(200, {status: 'Success'});
//                })
//            }
//        });
//    }
//};
//
//
//
