var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/category/category";
        res.render(userView);
    },
    result: function(req, res) {
        var CategoryDelivery = req.body.CategoryDelivery;
        var CategorySeazon = req.body.CategorySeazon;
        var connectionQuery = "SELECT DISTINCT							" +
            "  categories.`назва категорії`,                                " +
            "categories.`кількість товарів в категорії`                      " +
            "FROM categories                                                " +
            "  INNER JOIN products                                          " +
            "ON products.`категорія товару` = categories.`назва категорії`  " +
            "  INNER JOIN orders                                            " +
            "ON orders.`замовлений товар` = products.`назва товару`         " +
            "WHERE products.`сезон товару` = '" + CategorySeazon + "'";
            "AND orders.`спосіб доставки замовлення` = '" + CategoryDelivery + "'";

        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    delivery: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT `спосіб доставки замовлення` FROM orders';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    seazon: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT `сезон товару` FROM products';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};