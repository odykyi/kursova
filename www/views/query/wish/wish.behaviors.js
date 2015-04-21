var wish = new Wish();
$(document).ready(function(){
    wish.showAllWishCity()
    wish.showAllWishYear()
    $(".btn").click(wish.showWishResult)
});