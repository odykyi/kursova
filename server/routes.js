var user = require('./user/user');
var product = require('./product/product');

module.exports.initialize = function(app) {

    app.get('/user', user.index);
    app.get('/user/country', user.country);

    app.get('/product', product.index);
    app.get('/product/subcategory', product.subcategory);
    app.get('/product/color', product.color);
    app.post('/product/result', product.result);

}
