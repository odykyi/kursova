var script = new Script();
function Order () {
    this.showOrderResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            OrderCount: $('#OrderCount').val(),
            OrderSex: $('#OrderSex').val()
        };
        $.ajax({
            method: "POST",
            url: "/order/result",
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
    this.showAllOrderCount = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/order/count",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{кількість проданих одиниць товару}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#OrderCount').append(rendered);
                }
            }
        });
    }
    this.showAllOrderSex = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/order/sex",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{стать покупця}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#OrderSex').append(rendered);
                }
            }
        });
    }
}