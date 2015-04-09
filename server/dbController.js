var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'eCommerce'
});
module.exports.dbController = function(req, res, connectionQuery) {
    var query1selectdata;
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });
    connection.query(connectionQuery, function(err, rows, fields) {
        if (!err) {
            query1selectdata = rows;
            console.log(query1selectdata);
            var dataquery1 = JSON.stringify(query1selectdata);
            res.json(dataquery1);
            res.end()
        } else{ console.log('Error while performing DB Query.'); }
    });
    connection.end(function(err) {
        console.log(err)
    });
}