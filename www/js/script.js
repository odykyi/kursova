$(function(){
    $("#header").load("/views/external/header.html");
    $("#footer").load("/views/external/footer.html");
});
function Script(){
    this.buildHtmlTable = function(myList){
        var that = this;
        var columns = that.addAllColumnHeaders(myList);
        for (var i = 0 ; i < myList.length ; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
                var cellValue = myList[i][columns[colIndex]];
                if (cellValue === null) {
                    cellValue = "";
                }
                row$.append($('<td/>').html(cellValue));
            }
            $("#excelDataTable").append(row$);
        }
    };
    this.addAllColumnHeaders = function(myList) {
        var columnSet = [];
        var headerTr$ = $('<tr/>');
        for (var i = 0 ; i < myList.length ; i++) {
            var rowHash = myList[i];
            for (var key in rowHash) {
                if ($.inArray(key, columnSet) == -1){
                    columnSet.push(key);
                    headerTr$.append($('<th/>').html(key));
                }
            }
        }
        $("#excelDataTable").append(headerTr$);
        return columnSet;
    };
}

