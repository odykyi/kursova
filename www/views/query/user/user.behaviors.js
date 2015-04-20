var product = new Product();
$(document).ready(function(){
    product.showAllProductCategories()
    product.showAllProductColor()
    $(".btn").click(product.showProductResult)
});