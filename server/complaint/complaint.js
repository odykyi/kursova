var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/query/complaint/complaint";
        res.render(userView);
    },
    result: function(req, res) {
        var ComplaintStatus = req.body.ComplaintStatus;
        var ComplaintYear = req.body.ComplaintYear;
        var connectionQuery = "SELECT DISTINCT									"+
            "  complaints.*                                                     "+
            "FROM                                                               "+
            "  complaints                                                       "+
            "  INNER JOIN users                                                 "+
            "  ON users.`ПІБ покупця` = complaints.`ПІБ покупця, що скаржився`  "+
            "WHERE                                                              "+
            "  complaints.`статус скарги` = '" + ComplaintStatus + "'" +
            "  AND users.`вік покупця` = '" + ComplaintYear + "'";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
            console.log(data);
        });
    },
    status: function(req, res) {
        var connectionQuery = "SELECT DISTINCT `статус скарги` FROM complaints";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    },
    year: function(req, res) {
        var connectionQuery = "SELECT DISTINCT `вік покупця` FROM users";
        dbController.dbQuery(connectionQuery, function (data) {
            res.json(data);
        });
    }
};