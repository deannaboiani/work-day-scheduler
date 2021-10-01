// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



var dateHeaderEL = document.getElementById("date-header")

var task = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []

}



// when the screen is loaded, display the correct date

dateHeader();
setInterval(dateHeader,500)

function dateHeader(){
    // shows date in the header of the page
    dateHeaderEL.innerHTML = moment().format('MMMM Do YYYY');
}
var timeBlockClass = document.getElementById("time-block")

function colorStatusUpdate() {
    // grabs current hour
    var currentHour = moment().format("HH");
    console.log(currentHour);
    
    var timeBlockArr = [];
    $(".time-block").each(function() {
        timeBlockArr.push($(this).attr("id"));
        
        for (let i = 0; i < timeBlockArr.length; i++) {
            finalTimeBlockEl = timeBlockArr[i];
            
        }
        
        if (finalTimeBlockEl < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (finalTimeBlockEl === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
};
colorStatusUpdate();




var saveButton = $(".saveButton")
$('.saveButton').click(function(event) {
    event.preventDefault();

    var taskText = $(this).siblings("#task").val();
    var listedHour = $(this).parent().attr("id");
    console.log(taskText, listedHour);

    localStorage.setItem(taskText, listedHour);


    })


// local storage
// create item


// get item
// set item


    