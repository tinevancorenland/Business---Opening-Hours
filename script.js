var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
m = checkTime(m);
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
var curWeekDay = days[today.getDay()];
var curDay = today.getDate();
var curMonth = months[today.getMonth()];
var curYear = today.getFullYear();
var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;


// liveClock that shows current time

function startTime() {

  document.getElementById("clock").innerHTML = h + ":" + m;
  var t = setTimeout(startTime, 45000);

  document.getElementById("date").innerHTML = date;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
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
}

// Close early on press button

var closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", closeEarly);

function closeEarly() {
  console.log("close now" + h + m + curWeekDay);
  closeButton.innerHTML = "Closed this " + curWeekDay + " at " + h + ":" + m;
}

// get table days and change to variables

var dayCells = document.getElementsByClassName("days");

dayCells[0].innerHTML = days[1];
dayCells[1].innerHTML = days[2];
dayCells[2].innerHTML = days[3];
dayCells[3].innerHTML = days[4];
dayCells[4].innerHTML = days[5];
dayCells[5].innerHTML = days[6];
dayCells[6].innerHTML = days[7];
