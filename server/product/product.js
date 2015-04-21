var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/product/product";
        res.render(userView);
    },
    result: function(req, res) {
        var ProductCategories = req.body.ProductCategories;
        var ProductСolors = req.body.ProductСolors;
        var connectionQuery = "SELECT DISTINCT									"+
            "  products.*                                                       "+
            "FROM                                                               "+
            "  products                                                         "+
            "  INNER JOIN categories                                            "+
            "  ON products.`категорія товару` = categories.`назва категорії`    "+
            "WHERE                                                              "+
            "  products.`категорія товару`=  '" + ProductCategories  + "'" +
            "  AND products.`колір товару` = '" + ProductСolors  + "'";
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