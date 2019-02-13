/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Melinda Chirila
   Date:  2/13/2019 

*/

//window.alert("Welcome to Tulsa ");

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* This is for the clock that is on the page*/
function runClock() {

    /*This is for the current date and time */
    var currentDay = new Date();

    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    /* This documents the date and the time */
    document.getElementById("dateNow").innerHTML =
        dateStr + " <br/> " + timeStr;

    /* This sort of calculates and measures the time until january 1st. */
    var newYear = new Date("January 1, 2018");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

    /* For the days left until the event/day. */
    document.getElementById("days").textContent = Math.floor(daysLeft);

    /* Using the day variable this calculates how much time there is left in the day. */
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);

    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
};