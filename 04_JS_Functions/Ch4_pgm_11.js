// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var question1, 
question2, 
question3, 
question, 
showQuestionInfo;

question1 = {
    question: "What is the capital of France?",
    options: ["A: Paris", "B: London", "C: Rome", "D: Madrid"],
    answer: "A"
};

question2 = {
    question: "Which planet is known as the Red Planet?",
    options: ["A: Earth", "B: Mars", "C: Jupiter", "D: Venus"],
    answer: "B"
};

question3 = {
    question: "What is the largest ocean on Earth?",
    options: ["A: Atlantic Ocean", "B: Indian Ocean", "C: Arctic Ocean", "D: Pacific Ocean"],
    answer: "D"
};

showQuestionInfo = function () {
    console.log("Question: " + question.question);
    console.log("------------------------------");
    console.log("Answer: " + question.answer);
    console.log("------------------------------");
};

question = question1;
showQuestionInfo();

question = question2;
showQuestionInfo();

question = question3;
showQuestionInfo();


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */