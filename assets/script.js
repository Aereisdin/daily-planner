$(document).ready(function() {

var DateTime = luxon.DateTime;
var dt = DateTime.local();
var now = dt.toLocaleString(DateTime.DATE_HUGE);
var mon = now.substr(0, 6);
var tues = now.substr(0, 7);
var weds = now.substr(0, 9);
var thurs = now.substr(0, 8);
var fri = now.substr(0, 6);

$("#now").text(now)

if(mon == 'Monday' || tues == 'Tuesday' || weds == 'Wednesday' || thurs == 'Thursday' || fri == 'Friday')
{console.log("It works")}

var appt9 = localStorage.getItem("appt9", function() {
    if("appt9" === null){appt9 = ""}
});
var appt10 = localStorage.getItem("appt10", function() {
    if("appt10" === null){appt10 = ""}
});
var appt11 = localStorage.getItem("appt11", function() {
    if("appt11" === null){appt11 = ""}
});
var appt12 = localStorage.getItem("appt12", function() {
    if("appt12" === null){appt12 = ""}
});
var appt1 = localStorage.getItem("appt1", function() {
    if("appt1" === null){appt1 = ""}
});
var appt2 = localStorage.getItem("appt2", function() {
    if("appt2" === null){appt2 = ""}
});
var appt3 = localStorage.getItem("appt3", function() {
    if("appt3" === null){appt3 = ""}
});
var appt4 = localStorage.getItem("appt4", function() {
    if("appt4" === null){appt4 = ""}
});
var appt5 = localStorage.getItem("appt5", function() {
    if("appt5" === null){appt5 = ""}
});


$("#9text").val(appt9)
$("#10text").val(appt10)
$("#11text").val(appt11)
$("#12text").val(appt12)
$("#1text").val(appt1)
$("#2text").val(appt2)
$("#3text").val(appt3)
$("#4text").val(appt4)
$("#5text").val(appt5)


$("#9save").on("click", function() {
    var appt9 = $("#9text").val();
    localStorage.setItem("appt9", appt9);
});
$("#10save").on("click", function() {
    var appt10 = $("#10text").val();
    localStorage.setItem("appt10", appt10);
});
$("#11save").on("click", function() {
    var appt11 = $("#11text").val();
    localStorage.setItem("appt11", appt11);
});
$("#12save").on("click", function() {
    var appt12 = $("#12text").val();
    localStorage.setItem("appt12", appt12);
});
$("#1save").on("click", function() {
    var appt1 = $("#1text").val();
    localStorage.setItem("appt1", appt1);
});
$("#2save").on("click", function() {
    var appt2 = $("#2text").val();
    localStorage.setItem("appt2", appt2);
});
$("#3save").on("click", function() {
    var appt3 = $("#3text").val();
    localStorage.setItem("appt3", appt3);
});
$("#4save").on("click", function() {
    var appt4 = $("#4text").val();
    localStorage.setItem("appt4", appt4);
});
$("#5save").on("click", function() {
    var appt5 = $("#5text").val();
    localStorage.setItem("appt5", appt5);
});

})