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

var sql     = require('mssql');

var config = {
    server: 'ZAZA'+ '\"' + 'DEV01',
    user:     'sa',
    password: '11111111'
};

sql.connect(config, function(err) {
    var request = new sql.Request();
    request.query("select * from table", function(err, recordset) {
        console.log(recordset);
        console.log(err);
        console.log(config);

    });
});



//app.post('/register', function(req, res){
//});
//app.get('/admin', function(req, res){
//})
//app.post('/login', function(req, res){
//})
//app.get('/users', function(req, res){
//});
//app.get('/', function(req, res){
//    res.render(index, {title: 'wer'})
//})
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});