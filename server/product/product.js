//var models = require('./categoryDB');
var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/product/product";
        res.render(userView);
    },
    result: function(req, res) {
        var ProductSubcategories = req.body.ProductSubcategories;
        var ProductСolors = req.body.ProductСolors;
        var connectionQuery = "SELECT DISTINCT product_id," +
            "  `кодТовару` ,                  " +
            "  `назваТовару`,                 " +
            "  `розмірТовару`   ,             " +
            "  `вартістьТовару`,              " +
            "  `колірТовару` ,                " +
            "  `сезонТовару` ,                " +
            "  `кількістьПроданихОдиницьТовару`, " +
            "  `підкатегоріяТовару`              " +
            "  FROM products                     " +
            "  WHERE `колірТовару` = '" + ProductСolors + "'" +
            "  AND `підкатегоріяТовару` = '" + ProductSubcategories + "'";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    subcategory: function(req, res) {
        var connectionQuery = 'SELECT `підкатегоріяТовару` FROM products';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    } ,
    color: function(req, res) {
        var connectionQuery = 'SELECT `колірТовару` FROM products';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};