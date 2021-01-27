$(document).ready(function() {

var DateTime = luxon.DateTime; // This tells the script DateTime to reference the luxon.min.js
var dt = DateTime.local();
var now = dt.toLocaleString(DateTime.DATE_HUGE); // Pulls a full date with the day of the week leading 
var timeCurrent = dt.toLocaleString(DateTime.TIME_24_SIMPLE) // Calls a 24 hour clock with current time
var time = parseInt(timeCurrent.substr(0, 2)) // selects the hour of the day
var mon = now.substr(0, 6); // Each of these selects out the day of the week
var tues = now.substr(0, 7);
var weds = now.substr(0, 9);
var thurs = now.substr(0, 8);
var fri = now.substr(0, 6);
var past = {"background-color": "#b3cccc", "color": "white"};
var current = {"background-color": "#155151", "color": "white"};
var future = {"background-color": "#ebfafa", "color": "black"}

console.log(time)
$("#now").text(now)
//Checks if its a weekday
if(mon === 'Monday' || tues === 'Tuesday' || weds === 'Wednesday' || thurs === 'Thursday' || fri === 'Friday')
{timeHighlight();
timePast();
timeFuture();}
else {}


function timeHighlight(){
    // current time
    if(time == 9){$("#nine").css(current);
        $("#9text").css(current);}
    else if(time === 10){$("#ten").css(current);
        $("#10text").css(current)}
    else if(time === 11){$("#eleven").css(current);
        $("#11text").css(current)}
    else if(time === 12){$("#twelve").css(current);
        $("#12text").css(current)}
    else if(time === 13){$("#one").css(current);
        $("#1text").css(current)}
    else if(time === 14){$("#two").css(current);
        $("#2text").css(current)}
    else if(time === 15){$("#three").css(current);
        $("#3text").css(current)}
    else if(time === 16){$("#four").css(current);
        $("#4text").css(current)}
    else if(time === 17){$("#five").css(current);
        $("#5text").css(current)}
}
function timePast(){
    //past time
    if(time > 9){$("#nine").css(past);
        $("#9text").css(past);}
    if(time > 10){$("#ten").css(past);
        $("#10text").css(past)}
    if(time > 11){$("#eleven").css(past);
        $("#11text").css(past)}
    if(time > 12){$("#twelve").css(past);
        $("#12text").css(past)}
    if(time > 13){$("#one").css(past);
        $("#1text").css(past)}
    if(time > 14){$("#two").css(past);
        $("#2text").css(past)}
    if(time > 15){$("#three").css(past);
        $("#3text").css(past)}
    if(time > 16){$("#four").css(past);
        $("#4text").css(past)}
    if(time > 17){$("#five").css(past);
        $("#5text").css(past)}
}
function timeFuture(){
    //past time
    if(time < 9){$("#nine").css(future);
        $("#9text").css(future);}
    if(time < 10){$("#ten").css(future);
        $("#10text").css(future)}
    if(time < 11){$("#eleven").css(future);
        $("#11text").css(future)}
    if(time < 12){$("#twelve").css(future);
        $("#12text").css(future)}
    if(time < 13){$("#one").css(future);
        $("#1text").css(future)}
    if(time < 14){$("#two").css(future);
        $("#2text").css(future)}
    if(time < 15){$("#three").css(future);
        $("#3text").css(future)}
    if(time < 16){$("#four").css(future);
        $("#4text").css(future)}
    if(time < 17){$("#five").css(future);
        $("#5text").css(future)}
}

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