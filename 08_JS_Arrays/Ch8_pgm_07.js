// Iterating over an array with forEach

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];
items.push("Taj Mahal");
items[4] = "Marina";

showInfo = function (itemToShow) {
    console.log(itemToShow + " has " + itemToShow.length + " letters.");
};

items.forEach(showInfo);

var totalLetters = function(arr) {
  var total = 0;
  arr.forEach(function(item) {
      if (item) {  
          total += item.length;
      }
  });
  return total;
};

var total = totalLetters(items);
console.log("The total number of letters in the items array is " + total);

/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */