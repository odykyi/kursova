var script = new Script();
function Wish () {
    this.showWishResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            WishCity: $('#WishCity').val(),
            WishYear: $('#WishYear').val()
        };
        $.ajax({
            method: "POST",
            url: "/wish/result",
            data: data,
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    console.log(data);
                    script.buildHtmlTable(data);
                }
            },
            error: function (data){
                alert("ERROR " + data);
            }
        });
    }
    this.showAllWishCity = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/wish/city",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{місто покупця}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#WishCity').append(rendered);
                }
            }
        });
    }
    this.showAllWishYear = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/wish/year",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{вік покупця}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#WishYear').append(rendered);
                }
            }
        });
    }
}