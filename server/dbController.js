var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'ecommerce'
});
connection.connect();
module.exports.dbQuery = function(connectionQuery, callback) {
    connection.query(connectionQuery, function(err, rows, fields) {
        if (!err) {
            var data;
            if (rows.length != 0){
                data = JSON.stringify(rows);
            } else{
                data = JSON.stringify([{'empty':'Ваш запит не дав результатів.'}]);
            }
            callback(data);
        } else {
            console.error(connectionQuery);
            console.error(err);
            console.error('err connection.query DB Query.');
        }
    });
}
