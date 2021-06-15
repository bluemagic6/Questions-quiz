// variables fro DOM elements
var highscoresEl = document.getElementById("highscores");
var timerEl = document.getElementById("timer");
var countdownEl = document.getElementById("countdown");
var startquizEl = document.querySelector("start-quiz");
var timeCd;
var quTime = 75;
var startButton = document.getElementById("startBtn")

// varible to hold array of objects with question choices and answers

var questionArr = [
    {
        quote: "Commonly used data types DO NOT include:",
        choices: ["strings", "alerts", "booleans", "numbers"],
        correct: "alerts"
    },
    {
        quote: "String values must be enclosed with _______ when being assigned to variable.",
        choices: ["commas", "curley brakets", "quotes", "parenthesis"],
        correct: "quotes"
    },
    {
        quote: "A very useful tool used during development and debugging for printing content to the debugger",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correct: "console.log"
    },
    {
        quote: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        quote: "Commonly used data types DO NOT include:",
        choices: ["strings", "alerts", "booleans", "numbers"],
        correct: "alerts"
    },
];

function quizStart(){
    // start timer
    timeCd = setInterval(countdown, 1000);
    timerEl.textContent = quTime;        
}

// Start timer function 
function countdown(){
    quTime--;
    timerEl.textContent = quTime;
    if (quTime <= 0 ){
        endQuiz()
    }
    if (quTime <= 0){
        clearInterval
    }
}
console.log(quTime)

function endQuiz() {
    // stop Timer
    clearInterval(quTime)
    timerEl.textContent = "0"
}

startButton.onclick = quizStart;