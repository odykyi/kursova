//var models = require('./categoryDB');
var dbController = require('../dbController');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/product/product";
        res.render(userView);
//        res.end();
    },
    result: function(req, res) {
        var ProductSubcategories = req.body.ProductSubcategories;
        var ProductСolors = req.body.ProductСolors;
        var connectionQuery = "SELECT DISTINCT product_id," +
            "  `назваТовару` ,                   " +
            "  `вартістьТовару`,                 " +
            "  `кодТовару`   ,                   " +
            "  `маркаТовару` ,                   " +
            "  `розмірТовару`,                   " +
            "  `колірТовару` ,                   " +
            "  `сезонТовару` ,                   " +
            "  `кількістьПроданихОдиницьТовару`, " +
            "  `підкатегоріяТовару`  ,           " +
            "  `датаДодаванняТовару`             " +
            "  FROM products                     " +
            "  WHERE `колірТовару` = '" + ProductСolors + "'" +
            "  AND `підкатегоріяТовару` = '" + ProductSubcategories + "'";
        console.log(connectionQuery)
        var returnData = dbController.dbQuery(req,res,connectionQuery);
    },
    subcategory: function(req, res) {
        var connectionQuery = 'SELECT `підкатегоріяТовару` FROM products';
        var returnData = dbController.dbQuery(req,res,connectionQuery);
//        res.json(returnData);
//        console.log("returnData " + returnData)
//        res.end();
    },
    color: function(req, res) {
        var connectionQuery = 'SELECT `колірТовару` FROM products';
        var returnData = dbController.dbQuery(req,res,connectionQuery);
//        res.json(returnData);
//        console.log("returnData " + returnData)
//        res.end();
    }
};