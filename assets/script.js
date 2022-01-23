// save reference to important DOM elements
var dayDisplayEl = $('#currentDay');




// handle displaying the time
function displayDay() {
    var rightNow = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(rightNow);
  }
  setInterval(displayDay, 1000);