var user = new User();
$(document).ready(function(){
    user.showAllUserCountries()
    $("span").click(function(){
        user.showAllUsers()
    })
});