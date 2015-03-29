var express  = require('express');
//var mongoose = require('mongoose');
var register = require('./server/register/register');

var http = require('http');
var path = require('path');

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

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'eCommerce'
});
connection.connect();
var users;

connection.query('SELECT * from users', function(err, rows, fields) {
    if (!err) {
        console.log('The solution is: ', rows);
        users = rows;
    }
    else{
        console.log('Error while performing Query.');

    }
});

connection.end();


var index  = "../www/index";
app.get('/', function(req, res){
    res.render(index, {data: users})
});

//app.post('/register', function(req, res){
//});
//app.get('/admin', function(req, res){
//})
//app.post('/login', function(req, res){
//})
//app.get('/users', function(req, res){
//
//});
//app.get('/', function(req, res){
//    res.render(index, {title: 'wer'})
//})
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});