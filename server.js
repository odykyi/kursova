var express  = require('express');
var http = require('http');
var path = require('path');
//var mysql = require('mysql');
var routes = require('./server/routes');
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

//var connection = mysql.createConnection({
//    host     : '127.0.0.1',
//    user     : 'root',
//    password : '',
//    database : 'eCommerce'
//});

var index  = "../www/index";
app.get('/', function(req, res){
    res.render(index);
});

routes.initialize(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});