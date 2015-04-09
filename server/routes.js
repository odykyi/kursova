var user = require('./user/user');
//var category = require('../category/category');
var userView  = "../www/views/user/user";

module.exports.initialize = function(app) {

    app.get('/user', function(req, res){
        res.render(userView);
    });
    app.get("/user/country",user.country);


//    app.get("/api/category",category.index);
//    app.post("/api/category",category.index);

}
