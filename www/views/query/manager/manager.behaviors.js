var manager = new Manager();
$(document).ready(function(){
    manager.showAllManagerStatus()
    manager.showAllManagerExp()
    $(".btn").click(manager.showManagerResult)
});