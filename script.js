// liveClock that shows current time

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById("clock").innerHTML = h + ":" + m;

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
  document.getElementById("date").innerHTML = date;

  var t = setTimeout(startTime, 45000);

  if (curWeekDay > 0 && curWeekDay <= 6 && h >= 9 && h < 17) {
    document.getElementById("message").innerHTML = "Hi there, we are open!";
  } else {
    document.getElementById("message").innerHTML =
      "Sorry, we are closed. Please check our opening hours as listed below.";
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
