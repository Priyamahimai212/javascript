// A quiz question constructor

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Bonjour");

question1.showQuestion();
var question2 = new QuizQuestion("What is 2 + 2?", "4");
question2.addOption("3");
question2.addOption("4");
question2.addOption("5");
question2.addOption("22");
question2.showQuestion();

var question3 = new QuizQuestion("Which planet is known as the Red Planet?", "Mars");
question3.addOption("Earth");
question3.addOption("Mars");
question3.addOption("Jupiter");
question3.addOption("Saturn");
question3.showQuestion();





/* Further Adventures
 *
 * 1) Add a fifth option to question1.
 *
 * 2) Create two more questions.
 *
 * 3) At the console prompt type
 *    question2.showQuestion();
 *    Press Enter
 *
 * 4) At the console prompt type
 *    question2.answer;
 *    Press Enter
 *
 */