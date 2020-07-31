//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var yellowScore = 0;
var blueScore = 0;
var greenScore = 0;
var orangeScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", yellow);
q1a2.addEventListener("click", blue);
q1a3.addEventListener("click", green);
q1a4.addEventListener("click", orange);

//#TODO: Define quiz functions here
function yellow() {
  yellowScore += 1;
  questionCount += 1;
 // alert("One Point to Yellow!");
  
  if (questionCount >= 3) {
    updateResult();
  }
}

function blue() {
  blueScore += 1;
  questionCount += 1;
 // alert("One Point to Blue!");
  
  if (questionCount >= 3) {
    updateResult();
  }
}

function green() {
  greenScore += 1;
  questionCount += 1;
  //alert("One Point to Green!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function orange() {
  orangeScore += 1;
  questionCount += 1;
 // alert("One Point to Orange!");
  if (questionCount >= 3) {
    updateResult();
  }
}

// variables for answer choice buttons for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

q2a1.addEventListener("click", yellow);
q2a2.addEventListener("click", blue);
q2a3.addEventListener("click", green);
q2a4.addEventListener("click", orange);

// variables for answer choice buttons for question 1
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

q3a1.addEventListener("click", yellow);
q3a2.addEventListener("click", blue);
q3a3.addEventListener("click", green);
q3a4.addEventListener("click", orange);

var result = document.getElementById("result");

function updateResult() {
  if (yellowScore >= 2) {
    result.innerHTML = "You are a Yellow Brainer!. This means you are Responsible, Organized, Loyal and Punctual";
  } else if (blueScore >= 2) { 
    result.innerHTML = "You are a Blue Brainer!. This means you are Creative, Communicative, Helpful and Compassionate";
  } else if (greenScore >= 2) {
    result.innerHTML = "You are a Green Brainer!. This means you are Logical, Private, Competent and Independent";
  } else if (orangeScore >= 2) {
    result.innerHTML = "You are an Orange Brainer!. This means you are Dynamic, Fun-loving, Generous and Courageous";
  } else {
    result.innerHTML = "Hmm.. The Sorting Hat is confused. Try again later.";
  }
}
