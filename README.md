#  Work-Day-Scheduler

## Description

This application  allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.This application satisfies all the below acceptance criteria. By just having a look , user can idetify past ,present and future events and can able to reschedule it.


## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## The following animation demonstrates the application functionality:

![animated-img](assets/workschedule.gif)
## Features
1 code used to get current hour
```javascript
const currentHour = moment().format("k");
```

2 code to display current day
```javascript
function displayDay() {
   var rightNow = moment().format('dddd, MMMM Do');
   dayDisplayEl.text(rightNow);
}
setInterval(displayDay, 1000);
```
dddd:day name
MMMM:month
Do:date(th/rd/st/nd)

3 code to collect each ids of hourblock
```javascript
let taskInput = $(".row textarea[type=text]");
```
4 code to save data in local storage
```javascript
$(".saveBtn").click(function (event) {
      event.preventDefault();
      let hrTask = $(this).attr("hour")      
      let storeTask = $(this).prev().val();  
      localStorage.setItem(hrTask, storeTask);
   });
```


## API references 

[to-get-date-format](http://momentjs.com/docs/#/displaying/format/
github.com)
[to-get-element-id](https://www.codegrepper.com/code-examples/javascript/jquery+get+id+value)]
[save-button-function](https://stackoverflow.com/questions/32294678/localstorage-on-button-click-jquery)
[reference-github](https://githubhelp.com/BwayCarl/workday-scheduler)


## URLs
1 [The URL of the deployed application]

2 [URL Github REPOSITORY]
- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
