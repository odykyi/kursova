var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/user/user";
        res.render(userView);
    },
    result: function(req, res) {
        var UserCountry = req.body.UserCountry;
        var UserOrder = req.body.UserOrder;
        var connectionQuery = "SELECT DISTINCT	"+
            "  users.*                                                      "+
            "FROM                                                           "+
            "  users                                                        "+
            "  INNER JOIN orders                                            "+
            "  ON users.`ПІБ покупця` = orders.`ПІБ покупця, що замовив`    "+
            "  INNER JOIN products                                          "+
            "  ON products.`назва товару` = orders.`замовлений товар`       "+
            "WHERE                                                          "+
            "  users.`країна покупця` = '" + UserCountry + "'" +
            "  AND products.`кількість проданих одиниць товару` = '" + UserOrder + "'";

        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    country: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT users.`країна покупця` FROM users';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    order: function(req, res) {
        var connectionQuery = "SELECT DISTINCT				"+
            "  `кількість проданих одиниць товару`          "+
            "FROM                                           "+
            "  products                                     "+
            "WHERE                                          "+
            "  `кількість проданих одиниць товару` <> '0'   "+
            "  AND `кількість проданих одиниць товару` <>   "+
            "'кількість проданих одиниць товару'            ";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};