var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/discount/discount";
        res.render(userView);
    },
    result: function(req, res) {
        var DiscountColor = req.body.DiscountColor;
        var DiscountPrice = req.body.DiscountPrice;
        var connectionQuery = "SELECT DISTINCT									"+
            "  discounts.*                                                      "+
            "FROM                                                               "+
            "  discounts                                                        "+
            "  INNER JOIN products                                              "+
            "  ON discounts.`назва акційного товару` = products.`назва товару`  "+
            "WHERE                                                              "+
            "  products.`колір товару` = '" + DiscountColor + "'"
            "  AND discounts.`ціна акційного товару` = '" + DiscountPrice + "'";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    color: function(req, res) {
        var connectionQuery = "SELECT DISTINCT `колір товару` FROM products";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    price: function(req, res) {
        var connectionQuery = "SELECT DISTINCT `ціна акційного товару` FROM discounts";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};