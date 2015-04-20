var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/user/user";
        res.render(userView);
    },
    result: function(req, res) {
        var UserCountry = req.body.UserCountry;
        var UserOrder = req.body.UserOrder;
        var connectionQuery = "SELECT DISTINCT							" +
            "  categories.`назва категорії`,                                " +
            "categories.`кількість товарів в категорії`                      " +
            "FROM categories                                                " +
            "  INNER JOIN products                                          " +
            "ON products.`категорія товару` = categories.`назва категорії`  " +
            "  INNER JOIN orders                                            " +
            "ON orders.`замовлений товар` = products.`назва товару`         " +
            "WHERE products.`сезон товару` = '" + UserCountry + "'";
        "AND orders.`спосіб доставки замовлення` = '" + UserOrder + "'";

        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    country: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT `спосіб доставки замовлення` FROM orders';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    order: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT `сезон товару` FROM products';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};