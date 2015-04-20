var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/manager/manager";
        res.render(userView);
    },
    result: function(req, res) {
        var ManagerStatus = req.body.ManagerStatus;
        var ManagerExp = req.body.ManagerExp;
        var connectionQuery = "SELECT DISTINCT											"+
            "  managers.*                                                               "+
            "FROM                                                                       "+
            "  managers                                                                 "+
            "  INNER JOIN orders                                                        "+
            "  ON orders.`менеджер, який оформляє замовлення` = managers.`ПІБ менеджера`"+
            "WHERE                                                                      "+
            "  managers.`стаж менеджера` = '" + ManagerExp + "'" +
            "  AND orders.`статус замовлення` = '" + ManagerStatus + "'";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    status: function(req, res) {
        var connectionQuery = "SELECT DISTINCT `статус замовлення` FROM orders";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    exp: function(req, res) {
        var connectionQuery = "SELECT DISTINCT `стаж менеджера` FROM managers WHERE `стаж менеджера` <> ''";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }

};