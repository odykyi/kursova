var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'eCommerce'
});

module.exports.dbInitialize = function() {
    connection.connect(function(err) {
        if (err) {
            console.error('error connection.connect: ' + err.stack);
            return;
        } else{
            console.log('connection.connect ' + connection.threadId);
        }
    });
}

module.exports.dbQuery = function(req,res,connectionQuery) {
    try{
        var that = this;
        that.dbInitialize();
    } catch(e){
        console.log("Error dbInitialize - " + e)
    }
    var result;
    connection.query(connectionQuery, function(err, rows, fields) {
        if (!err) {
            if(rows.length != 0 ){
                result = JSON.stringify(rows);
            } else{
                result = JSON.stringify([{'empty':'Даних не знайдено'}]);
            }
            res.json(result);
            res.end();
            return result;
        } else{
            console.error(connectionQuery);
            console.error('err connection.query DB Query.');
        }
    });
//    connection.end(function(err) {
//        console.log("connection.end ERROR" + err)
//    });
}


