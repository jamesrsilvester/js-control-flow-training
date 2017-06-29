console.log("security_questions.js version loaded");
//array for questions, expected answer, and eventually, recievedAnswer
let securityQuestions = [
  {
    question: "favorite color?",
    expectedAnswer: "orange",
  },
  {
    question: "hometown?",
    expectedAnswer: "norwalk"},
  {
    question: "favorite cat?",
    expectedAnswer: "chichi"
  }
]

var recievedAnswer = "";
//create prompt for each question that repeats
  for (var i=0; i < securityQuestions.length; i++){
     recievedAnswer = prompt(securityQuestions[i].question);
      if (receivedAnswer !== securityQuestions[i].expectedAnswer) {
        alert("Incorrect");
      break;
      }
}


// add additional keyphrase to array that is recieved input.
//if recieved input === expectedAnswer,
