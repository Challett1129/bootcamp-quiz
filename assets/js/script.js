//variable to hold quiz timer
let timer = 60; 

//variable to append text into 
const quizContainerEl = document.querySelector("#quiz-container");
const headerEl = document.querySelector("#header");
const quizEl = document.querySelector("#quiz");
const startBtn = document.querySelector("#start-btn");
let currentQuestion; 
//array to hold all question objects 
const quizQuestions = [ 
{
    question: 'select thisC',
    answers: [
        {text: 'thisA', correct: false},
        {text: 'thisB', correct: false},
        {text: 'thisC', correct: true}, 
        {text: 'thisD', correct: false},
    ]
},
{
    question: 'select thisB',
    answers: [
        {text: 'thisA', correct: false},
        {text: 'thisB', correct: true},
        {text: 'thisC', correct: false},
        {text: 'thisD', correct: false}
    ]
}
];

//start button to create the quiz 
function nextQuestion () { 
    let currentQuestion = 0; 
    questionElement(quizQuestions[currentQuestion]);
    console.log(quizQuestions[currentQuestion])
}

function questionElement(question) {
    quizEl.innerText = question.question;
    quizEl.classList.remove('hide');

    question.answers.forEach(answer => {
        const buttonEl =document.createElement("button")
        buttonEl.classList.add('btn')
        if (answer.correct) {
            buttonEl.dataset.correct = answer.correct;
        }
        buttonEl.addEventListener('click', userAnswer);
    })

}

function userAnswer(event) {

}


let quiz = () => {
    //remove current text to display questions
    let startStr = document.querySelector("#quiz");
    startStr.classList.add('hide');
    startBtn.classList.add('hide');
    nextQuestion();

}

    




//create timer countdown 
function countdown() {
	timer--;
	document.getElementById("seconds").innerHTML = String("Time: " + timer );
	if (timer > 0) {
		setTimeout(countdown, 1000);
	}
};

countdown();

 //create submit button

//function to save and store high scores

//create function  to display high scores

//create listen function to listen for click on submit
startBtn.addEventListener('click', quiz);