// save reference to important DOM elements
var dayDisplayEl = $('#currentDay');
//const today = moment().format("dddd, MMMM Do, YYYY"); // Current day
const currentTime = moment(); //Current time
const currentHour = moment().format("k");//time in hour



// handle displaying the currentDay
function displayDay() {
    var rightNow = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(rightNow);
  }
  setInterval(displayDay, 1000);

//to mark past ,present,future collect ids of each hourblock
  let taskInput = $(".row textarea[type=text]"); 
//console.log('taskInput',taskInput);

$(taskInput).each(function() {       

   const taskInputNumber = parseInt($(this).attr("id"));//collecting id's

   //adding class to each hourblock
if (taskInputNumber < currentHour) {
   $(this).addClass("past")}
   else if(taskInputNumber==currentHour){
       $(this).addClass("present")
   }
 
else if (taskInputNumber > currentHour) {
   $(this).addClass("future")
}

});

//save button to save data
$(".saveBtn").click(function(event) {
   event.preventDefault();
   let hrTask = $(this).attr("hour")      // Corresponds to the key referenced for localStorage - also same as hour in military time.
   let storeTask = $(this).prev().val();  // Previous sibling https://api.jquery.com/prev/ (in this case previous sibling is the textarea, value is the text entered.)
   localStorage.setItem(hrTask,storeTask);
});


