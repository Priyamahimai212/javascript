// Using variables to represent a book

var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

var bookTitle2;
bookTitle2 = "1984";
bookAuthor = "George Orwell";

console.log(bookTitle2 + " by " + bookAuthor);

var bookTitle3;
bookTitle3 = "The Great Gatsby ";
bookAuthor = "F.Scott Fitzgerald";

console.log(bookTitle3 + " by " + bookAuthor);

let books = [
    { name: "Book 1", author: "Author 1" },
    { name: "Book 2", author: "Author 2" },
    { name: "Book 3", author: "Author 3" },
    { name: "Book 4", author: "Author 4" },
    { name: "Book 5", author: "Author 5" },
    { name: "Book 6", author: "Author 6" },
    { name: "Book 7", author: "Author 7" },
    { name: "Book 8", author: "Author 8" },
    { name: "Book 9", author: "Author 9" },
    { name: "Book 10", author: "Author 10" }
];

// Display the books
books.forEach(book => {
    console.log( bookTitle = + { bookTitle}, bookAuthor =  + {bookAuthor});
});




/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */