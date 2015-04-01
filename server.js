var express  = require('express');
var register = require('./server/register/register');
var http = require('http');
var path = require('path');
var mysql = require('mysql');

var app = express();

app.engine('html', require('hogan-express'));
app.set('view options', {layout: true});
app.set('layout', 'layout');
app.enable('view cache');
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'www')));

var allUsers;
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'eCommerce'
});
//connection.connect();
//
//connection.query('SELECT * from users', function(err, rows, fields) {
//    if (!err) {
//        //console.log('The solution is: ', rows);
//        allUsers = rows;
//    }
//    else{
//        //console.log('Error while performing Query.');
//    }
//});
//connection.end();


var query1require = require('./server/query/query1');
query1require.query1.requestHtml(app,connection);







var index  = "../www/index";
app.get('/', function(req, res){
    res.render(index);
});


//var user  = "../www/user/user";
//app.get('/showAllUsers', function(req, res){
//    allUsers = JSON.stringify(allUsers);
//    res.render(user, {allUsers: allUsers})
//});
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});