var script = new Script();
function Category () {
    this.showCategoryResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            CategoryDelivery: $('#CategoryDelivery').val(),
            CategorySeazon: $('#CategorySeazon').val()
        };
        $.ajax({
            method: "POST",
            url: "/category/result",
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
    this.showAllCategoryDelivery = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/category/delivery",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{спосіб доставки замовлення}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#CategoryDelivery').append(rendered);
                }
            }
        });
    }
    this.showAllCategorySeazon = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/category/seazon",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{сезон товару}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#CategorySeazon').append(rendered);
                }
            }
        });
    }
}