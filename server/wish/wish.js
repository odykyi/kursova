var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/wish/wish";
        res.render(userView);
    },
    result: function(req, res) {
        var WishCity = req.body.WishCity;
        var WishYear = req.body.WishYear;
        var connectionQuery = "SELECT DISTINCT														"+
            "  wishes.*                                                                             "+
            " FROM                                                                                  "+
            "  wishes                                                                               "+
            "  INNER JOIN users                                                                     "+
            "  ON users.`логін покупця` = wishes.`логін покупця, що додав товар до списку бажань`   "+
            " WHERE                                                                                 "+
            "  users.`місто покупця` = '" + WishCity + "'" +
            "  AND users.`вік покупця` > '" + WishYear + "'";
console.log(connectionQuery)

        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    city: function(req, res) {
        var connectionQuery = 'SELECT DISTINCT `місто покупця` FROM users';
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    year: function(req, res) {
        var connectionQuery = "SELECT DISTINCT"+
            "  users.`вік покупця`  "+
            "  FROM users           "+
            "ORDER BY               "+
            "  users.`вік покупця`  ";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};