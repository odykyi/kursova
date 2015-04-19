var category = new Category();
$(document).ready(function(){
    category.showAllCategoryDelivery()
    category.showAllCategorySeazon()
    $(".btn").click(category.showCategoryResult)
});