var server  = require('server');
var mongoose = require('mongoose');
server.use(express.bodyParser());

var MySignIn = new mongoose.Schema({
    name : String,
    pass : String
});
var user = mongoose.model('users', MySignIn);
app.post('/register', function(req, res){
    new user({
        name : req.body.name,
        pass : req.body.pass
    }).save(function(err,doc){
            if(err) res.json(err);
            else res.send('Ви Успішно Зареєстровані');
        });
});