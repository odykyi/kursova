//var models = require('./categoryDB');
var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/user/user";
        res.render(userView);
//        res.end();
    },
    country: function(req, res) {
        var connectionQuery = 'SELECT країнаПокупця FROM users';
        var returnData = dbController.dbQuery(req,res,connectionQuery);
//        res.json(returnData);
        console.log("returnData " + returnData)
//        res.end();
    }
};