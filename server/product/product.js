var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/product/product";
        res.render(userView);
    },
    result: function(req, res) {
        var ProductCategories = req.body.ProductCategories;
        var ProductСolors = req.body.ProductСolors;
        var connectionQuery = "SELECT DISTINCT `код товару`," +
            "  `назва товару`,                 " +
            "  `розмір товару` ,               " +
            "  `вартість товару`,              " +
            "  `колір товару` ,                " +
            "  `сезон товару` ,                " +
            "  `кількість проданих одиниць товару`, " +
            "  `категорія товару`                   " +
            "  FROM products                        " +
            "  WHERE `колір товару` = '" + ProductСolors + "'" +
            "  AND `категорія товару` = '" + ProductCategories + "'";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    category: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT `категорія товару` FROM products';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    color: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT `колір товару` FROM products';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};