var user = new User();
$(document).ready(function(){
    user.showAllUserCountry()
    user.showAllUserOrder()
    $(".btn").click(user.showUserResult)
});