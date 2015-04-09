exports.query1 = {
    requestHtml: function(app, connection) {
        var query1selectdata;
        var query1path  = "../www/query/query1";
        app.get('/api/query1', function(req, res){
            connection.connect();
            var connectionQuery = 'SELECT * from users';
            connection.query(connectionQuery, function(err, rows, fields) {
                if (!err) {
                    query1selectdata = rows;
                    console.log(query1selectdata);
                    var dataquery1 = JSON.stringify(query1selectdata);
                    res.write(dataquery1);
                    res.end()
                } else{ console.log('Error while performing DB Query.'); }
            });
            connection.end();

        });
    }
}


