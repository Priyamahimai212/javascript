// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 5);

console.log(report);

var getMonthlyVisitorReport = function (monthArray, weekWanted, dayWanted) {
  var weekArray = monthArray[weekWanted - 1];
  return getVisitorReport(weekArray, dayWanted);
};

var week1 = [354, 132, 210, 221, 481, 400, 250];
var week2 = [378, 142, 220, 231, 490, 410, 260];
var week3 = [390, 152, 230, 241, 500, 420, 270];
var week4 = [410, 162, 240, 251, 510, 430, 280];

var month = [week1, week2, week3, week4];

console.log(getMonthlyVisitorReport(month, 1, 5)); 
console.log(getMonthlyVisitorReport(month, 2, 6)); 
console.log(getMonthlyVisitorReport(month, 3, 7)); 
console.log(getMonthlyVisitorReport(month, 4, 1));

/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */