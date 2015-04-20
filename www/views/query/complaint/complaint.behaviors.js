var complaint = new Complaint();
$(document).ready(function(){
    complaint.showAllComplaintStatus()
    complaint.showAllComplaintYear()
    $(".btn").click(complaint.showComplaintResult)
});