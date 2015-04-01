function Query1 () {
    this.showAllUsers = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/query1",
            complete: function(data){
                data = data.responseText;
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



