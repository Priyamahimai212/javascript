// A function with two arguments

var showSum;
var showProduct;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);
showSum(56, 74);

showProduct = function (number1, number2) {
	var total = number1 * number2;
	console.log("The Product is " + total);
};

showProduct(3,9);

showProduct = function (number1, number2,number3) {
	var total = number1 * number2 * number3;
	console.log("The Product of three numbers is " + total);
};
showProduct(3,5,7);

showDifference= function (number1, number2) {
	var total = number1 + number2;
	console.log("The subtraction is " + total);
};

showDifference(8,4);

showQuotient = function (number1, number2) {
	var total = number1 + number2;
	console.log("The Quotient is " + total);
};
showQuotient(8765,5);

/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */