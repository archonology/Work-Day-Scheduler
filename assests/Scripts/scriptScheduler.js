//global variables
var timeDisplay = document.getElementById("currentDay");

var datetime = null,
        date = null;

//time function in header
var update = function () {
    date = moment(new Date())
    timeDisplay.html(date.format("dddd, MMMM Do YYYY"));
};

timeDisplay = $("#currentDay")
update();
setInterval(update, 1000);

//function for the body/scheduler
$(document).ready(function(){

    //get description/event items into local storage
    $(".saveBtn").on("click",function() {
    var text = $(this).siblings(".description").val(); // take the change from the sibling html description attribute
    var time = $(this).parent().attr("id"); // take the change from the parent html id attribute

    //set items in local storage.
    localStorage.setItem(time, text);
})

    //page will save data for each hour an entry is created/saved. 
    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

    //need to track the current time of day and have it accessible to all the time-blocks -- this way uses moment.js
    function hourTracker() {
        var currentHour = moment().hour(); // Number

    //now the time needs to be connected to the blocks themselves
    $(".description").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour);

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if(blockHour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }  
    })
}

hourTracker();

})