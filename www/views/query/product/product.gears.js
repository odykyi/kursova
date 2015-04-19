var script = new Script();
function Product () {
    this.showProductResult = function (){
        var that = this;
        $("#jsontotable").find("table").remove();
        var data = {
            ProductCategories: $('#ProductCategories').val(),
            ProductСolors: $('#ProductСolors').val()
        };
        $.ajax({
            method: "POST",
            url: "/product/result",
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
    this.showAllProductCategories = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/product/category",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{категорія товару}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#ProductCategories').append(rendered);
                }
            }
        });
    }
    this.showAllProductColor = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/product/color",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{колір товару}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#ProductСolors').append(rendered);
                }
            }
        });
    }
}