var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome! "  + userName);
console.log("Hey!"  + userName + ", How much you know Vivek?");
console.log("Lets see with a simple quiz?");
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
console.log("You were Right")
    score = score + 1;
  }else{
    console.log("You were wrong")
     score = score -1;
  }
   console.log("Current score: "  + score );
  console.log("****************************************************")
}
 var questions = [{
  question: "Where do Vivek live?",
  answer: "Indore"
}, {
  question: "Which is his favourite fruit?",
  answer: "Mango"
}, {
  question: "Which is his favourite Colour?",
  answer: "White"
 }, {  
  question: "Does he have any pets?",
  answer: "No"
 }, {  
 question: "Whether he is introvert or extrovert?",
  answer: "introvert"
   
 }];

for (var i=0; i<questions.length; i++) {
 var currentQuestion = questions[i];
 play (currentQuestion.question,currentQuestion.answer);
}

console.log("New High Score is " + score);