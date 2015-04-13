function Product () {
    this.showProductResult = function (){
        var that = this;
        $("#jsontotable").find("table").remove()
        var data = {
            ProductSubcategories: $('#ProductSubcategories').val(),
            ProductСolors: $('#ProductСolors').val()
        };
        console.log(data)
        $.ajax({
            method: "POST",
            url: "/product/result",
            data: data,
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    $.jsontotable(data, { id: '#jsontotable', className: 'table table-hover table-bordered' });
                }
            },
            error: function (data){
                alert("ERROR " + data);
            }
        });
    }
    this.showAllProductSubcategories = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/product/subcategory",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{підкатегоріяТовару}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#ProductSubcategories').append(rendered)
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
                        "<option>{{колірТовару}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#ProductСolors').append(rendered)
                }
            }
        });
    }

}



