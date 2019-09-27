var today = new Date();
var h = today.getHours();
var m = today.getMinutes();

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var businessHoursStart = [
  "closed",
  "9",
  "9",
  "9",
  "9",
  "9",
  "closed"
];
var businessHoursStop = [
  " ",
  "17",
  "17",
  "17",
  "17",
  "17",
  " "
];
var curWeekDay = days[today.getDay()];
var curDay = today.getDate();
var curMonth = months[today.getMonth()];
var curYear = today.getFullYear();
var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;


// liveClock that shows current time and date

function startTime() {
  if(m < 10) {
    document.getElementById("clock").innerHTML = h + ":0" + m;
  } else {
    document.getElementById("clock").innerHTML = h + ":" + m;
  }
    
  var t = setTimeout(startTime, 45000);
  document.getElementById("date").innerHTML = date;
}

// message stating we are open or closed

function OpenClose() {
  console.log(today.getDay());
  console.log(today.getHours())

  if (today.getDay() == 0 || today.getDay() == 6) {
    document.getElementById("message").innerHTML = "Sorry we are closed!";
  } else if (8 <= today.getHours() && today.getHours() <= 17) {
    document.getElementById("message").innerHTML = "Hi there, we are open!";
  } else {
    document.getElementById("message").innerHTML = "Sorry we are closed!";
  }
  tableDays();
}

// get table days and change to variables

var dayCells = document.getElementsByClassName("days");
var startHourCells = document.getElementsByClassName("hours");
var stopHourCells = document.getElementsByClassName("hoursStop");

function tableDays() {
  for (a=0; a<dayCells.length; a++){
    dayCells[a].innerHTML = days[a];
    startHourCells[a].innerHTML = businessHoursStart[a];
    stopHourCells[a].innerHTML = businessHoursStop[a];
  }
}


// Close early on press button - NOT FINISHED

var closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", closeEarly);

function closeEarly() {
  console.log("close now" + h + m + curWeekDay);
  var dayClosing = days.includes(curWeekDay);
  console.log(days);
  console.log(curWeekDay)
  console.log(dayClosing);
  closeButton.innerHTML = "Closing now: " + curWeekDay + " at " + h + ":" + m;

}


