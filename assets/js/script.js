//variable to hold quiz timer
let timer = 60; 

//variable to append text into 
const sectionEl = document.querySelector("#wrapper");
const quizContainerEl = document.querySelector("#quiz-container");
const headerEl = document.querySelector("#header");
const pageContentEl = document.querySelector("#page-content");
const startBtn = document.querySelector("#start-btn");
//array to hold all question objects 
const quizQuestions = [ 
{
    question: 'select thisC',
    answers: {
        a: 'thisA',
        b: 'thisB',
        c: 'thisC',
        d: 'thisD' 
    },
    correctAnswer: "c",
},
{
    question: 'select thisB',
    answers: {
        a: 'thisA',
        b: 'thisB',
        c: 'thisC',
        d: 'thisD' 
    },
    correctAnswer: "b"
}
];

//start button to create the quiz 
let quizHandler = (event) => {
    //remove current text to display questions
    let startStr = document.querySelector("#quiz");
    startStr.remove();
    startBtn.remove();

    //variable to tell what question to display
    let currentQuestion = 0; 

    //main function which cycles through quiz
    if(currentQuestion < quizQuestions.length) {
        let quizQuestionEl = document.createElement("div");
        quizQuestionEl.className = "quiz-form"; 
        quizQuestionEl.innerHTML = 
        '<h1 class = "question" id = "question">' + quizQuestions[currentQuestion].question + '</h1>' + 
        '<form id="quiz">' +
        '<input type="radio" id="0" name="option" value="a">' +
        '<label for="0">' + quizQuestions[currentQuestion].answers.a + '</label><br>' +

        '<input type="radio" id="1" name="option" value="b">' +
        '<label for="1">' + quizQuestions[currentQuestion].answers.b + '</label><br>' +

        '<input type="radio" id="2" name="option" value="c">' + 
        '<label for="2">' + quizQuestions[currentQuestion].answers.c + '</label><br>' +

        '<input type="radio" id="3" name="option" value="d">' + 
        '<label for="3">' + quizQuestions[currentQuestion].answers.d + '</label><br>' +

        '<p id="message"></p>' +

        '</form>'
        
        let answer = document.getElementsByName("option");
        console.log(answer);

        //add code to read user input in radio and display message if user is right or wrong
        //.checked method to check what radio input is selected
        //if .checked is correct display correct and go to next question else display incorrect and -10 seconds to timer, then next question
        //at end of quiz create element prompt to submit initials then store high score 
        //next screen displays all high-scores with an option to restart the quiz
        quizContainerEl.appendChild(quizQuestionEl);
        }



        
        
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
startBtn.addEventListener('click', quizHandler );