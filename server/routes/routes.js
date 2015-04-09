var category = require('../category/category');

module.exports.initialize = function(app) {


    app.get("/api/category",category.index);
    app.post("/api/category",category.index);

}
