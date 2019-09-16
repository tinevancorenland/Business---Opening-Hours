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
  } else if (8 >= today.getHours() && today.getHours() <= 17) {
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