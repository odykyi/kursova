var order = new Order();
$(document).ready(function(){
    order.showAllOrderCount()
    order.showAllOrderSex()
    $(".btn").click(order.showOrderResult)
});