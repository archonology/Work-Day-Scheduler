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
});

//get description/event items into local storage
$(".saveBtn").on("click",function() {
    console.log(this);
    //getting the text input from the sibling HTML description attr.
    var userText = $(this).siblings(".description").val();
    //getting the time chage from the parent HTML id attr. ( parent id? doesn't need value?)
    var textEntryTime = $(this).parent("id");
    //set the items in local storage
    localStorage.setItem(userText, textEntryTime);
})

//page will save data for each hour an entry is created/saved. 
$("#block8am .description").val(localStorage.getItem("block8am"));
$("#block9am .description").val(localStorage.getItem("block9am"));
$("#block10am .description").val(localStorage.getItem("block10am"));
$("#block11am .description").val(localStorage.getItem("block11am"));
$("#block12pm .description").val(localStorage.getItem("block12pm"));
$("#block1pm .description").val(localStorage.getItem("block1pm"));
$("#block2pm .description").val(localStorage.getItem("block2pm"));
$("#block3pm .description").val(localStorage.getItem("block3pm"));
$("#block4pm .description").val(localStorage.getItem("block4pm"));
$("#block5pm .description").val(localStorage.getItem("block5pm"));