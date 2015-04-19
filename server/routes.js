var user = require('./user/user');
var product = require('./product/product');
var category = require('./category/category');
var index  = "../www/index";
var query  = "../www/views/query";
var edit  = "../www/views/edit";

module.exports.initialize = function(app) {

    app.get('/', function(req, res){
        res.render(index);
    });
    app.get('/query', function(req, res){
        res.render(query);
    });
    app.get('/edit', function(req, res){
        res.render(edit);
    });

    app.get('/user', user.index);
    app.get('/user/country', user.country);

    app.get('/product', product.index);
    app.get('/product/category', product.category);
    app.get('/product/color', product.color);
    app.post('/product/result', product.result);


    app.get('/category', category.index);
    app.get('/category/delivery', category.delivery);
    app.get('/category/seazon', category.seazon);
    app.post('/category/result', category.result);

}
