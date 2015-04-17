function User () {
    this.showAllUsers = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/users",
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

    this.showAllUserCountries = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/user/country",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{країнаПокупця}}</option>" +
                        "{{/.}}";
//                  $.get('/templates/userTemp1.html', function(template) {
                    var rendered = Mustache.render(template, data);
                    $('#countryUser').append(rendered)
//                  });
                }
            }
        });
    }
}



