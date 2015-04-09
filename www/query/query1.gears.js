function Query1 () {
    this.showAllUsers = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/api/category",
            complete: function(data){
                data = data.responseJSON;
                data = JSON.parse(data);
                $.get('/js/templates/selectRenderHtml.html', function(template) {
                    var rendered = Mustache.render(template, data);
                    $('ul').append(rendered)
                });
            }
        })
    }
//    this.renderShowAllUsers = function (){
//        $.get('/js/templates/selectRenderHtml.html', function(template) {
//            var rendered = Mustache.render(template, {name: "Luke"});
//            $('ul').append("<li>" + rendered + "</li>")
//        });
//    }
}



