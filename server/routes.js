var user = require('./user/user');
var order = require('./order/order');
var category = require('./category/category');
var manager = require('./manager/manager');
var product = require('./product/product');
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
    app.get('/user/order', user.order);
    app.post('/user/result', user.result);


    app.get('/order', order.index);
    app.get('/order/count', order.count);
    app.get('/order/sex', order.sex);
    app.post('/order/result', order.result);

    app.get('/category', category.index);
    app.get('/category/delivery', category.delivery);
    app.get('/category/seazon', category.seazon);
    app.post('/category/result', category.result);

    app.get('/manager', manager.index);
    app.get('/manager/status', manager.status);
    app.get('/manager/exp', manager.exp);
    app.post('/manager/result', manager.result);



    app.get('/product', product.index);
    app.get('/product/category', product.category);
    app.get('/product/color', product.color);
    app.post('/product/result', product.result);






}
