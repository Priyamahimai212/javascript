// Displaying a multiple choice question

var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(
      function (answer, i) {
        console.log(options[i] + " - " + answer);
      }
    );
  };
  
  var question1 = {
    question : "What is the capital of France?",
    answers : [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
    ],
    correctAnswer : "Paris"
  };
  
  var question2 = {
    question: "What is the largest planet in our Solar System?",
    answers: [
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn"
    ],
    correctAnswer: "Jupiter"
  };
  
  var question3 = {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      "Gold",
      "Oxygen",
      "Osmium",
      "Oxium"
    ],
    correctAnswer: "Oxygen"
  };
  var questions = [question1, question2, question3];

questions.forEach(displayQuestion);

  displayQuestion(question1);
  
  
  
  /* Further Adventures
   *
   * 1) Add two more question objects.
   *
   * 2) Create an array with your question objects.
   *
   * 3) Use forEach to call displayQuestion on
   *    each of your questions.
   *
   * 4) Can you execute a command at the prompt
   *    to display a particular question?
   */