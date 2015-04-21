var script = new Script();
function Discount () {
    this.showDiscountResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            DiscountColor: $('#DiscountColor').val(),
            DiscountPrice: $('#DiscountPrice').val()
        };
        $.ajax({
            method: "POST",
            url: "/discount/result",
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
    this.showAllDiscountColor = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/discount/color",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{колір товару}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#DiscountColor').append(rendered);
                }
            }
        });
    }
    this.showAllDiscountPrice = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/discount/price",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{ціна акційного товару}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#DiscountPrice').append(rendered);
                }
            }
        });
    }
}