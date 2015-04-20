var script = new Script();
function Complaint () {
    this.showComplaintResult = function (){
        var that = this;
        $("#excelDataTable").find("tbody").remove();
        var data = {
            ComplaintStatus: $('#ComplaintStatus').val(),
            ComplaintYear: $('#ComplaintYear').val()
        };
        $.ajax({
            method: "POST",
            url: "/complaint/result",
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
    this.showAllComplaintStatus = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/complaint/status",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{статус скарги}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#ComplaintStatus').append(rendered);
                }
            }
        });
    }
    this.showAllComplaintYear = function (){
        var that = this;
        $.ajax({
            method: "GET",
            url: "/complaint/year",
            complete: function(data){
                if(data.status !== 500){
                    data = data.responseJSON;
                    data = JSON.parse(data);
                    var template = "{{#.}}" +
                        "<option>{{вік покупця}}</option>" +
                        "{{/.}}";
                    var rendered = Mustache.render(template, data);
                    $('#ComplaintYear').append(rendered);
                }
            }
        });
    }
}