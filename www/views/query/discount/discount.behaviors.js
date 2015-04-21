var discount = new Discount();
$(document).ready(function(){
    discount.showAllDiscountColor()
    discount.showAllDiscountPrice()
    $(".btn").click(discount.showDiscountResult)
});