var product = new Product();
$(document).ready(function(){
    product.showAllProductSubcategories()
    product.showAllProductColor()


    $(".btn").click(product.showProductResult)

});