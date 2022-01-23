// save reference to important DOM elements
var dayDisplayEl = $('#currentDay');
//const today = moment().format("dddd, MMMM Do, YYYY"); // Current day
const currentTime = moment(); //Current time
const currentHour = moment().format("k"); //Current hour in military time





// handle displaying the currentDay
function displayDay() {
    var rightNow = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(rightNow);
  }
  setInterval(displayDay, 1000);

//enter task in appropriate hourblock
  let taskInput = $(".row textarea[type=text]"); 
console.log('taskInput',taskInput[0]);

$(taskInput).each(function() {       

   const taskInputNumber = parseInt($(this).attr("id"));

   
if (taskInputNumber < currentHour) {
   $(this).addClass("past")}else if(taskInputNumber==currentHour){
       $(this).addClass("present")
   }
 
else if (taskInputNumber > currentHour) {
   $(this).addClass("future")
}

});

