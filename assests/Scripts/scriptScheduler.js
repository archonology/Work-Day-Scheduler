//global variables
var timeDisplay = document.getElementById("currentDay");

var datetime = null,
        date = null;

//time function in header
var update = function () {
    date = moment(new Date())
    timeDisplay.html(date.format("dddd, MMMM Do YYYY"));
};

$(document).ready(function(){
    timeDisplay = $("#currentDay")
    update();
    setInterval(update, 1000);

    //get description/event items into local storage
    $(".saveBtn").on("click",function() {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

    //set items in local storage.
    localStorage.setItem(time, text);
})

    //page will save data for each hour an entry is created/saved. 
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    //need to track the current time of day and have it accessible to all the time-blocks -- this way uses moment.js
    function hourTracker() {
        var currentHour = moment().hour(); // Number

    //now the time needs to be connected to the blocks themselves
    $(".time-block").each(function() {
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