// A calendar event constructor

var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        console.log(this.title + ": " + this.startDate + " - (" + this.startTime + " - " + this.endTime + ")");
    };
};

      
var calEvent = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

 calEvent.showEvent();
var calEvent2 = new CalendarEvent(
    " Review",
    "8/4/18",
    "5.00pm",
    "7.00pm"
);

calEvent2.showEvent();



/* Further Adventures
 *
 * 1) Add a second event.
 *
 * 2) Call the showEvent method on your
 *    new calendar event.
 *
 * 3) Update the showEvent method so that
 *    its output looks like this:
 *    Annual Review: 3/5/16 - (4.00pm - 5.00pm)
 *
 */