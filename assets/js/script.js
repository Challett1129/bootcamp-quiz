//variable to hold quiz timer
let timer = 60; 

//variable to append text into 
const sectionEl = document.querySelector("#wrapper");
const divEl = document.querySelector("#quiz");
const headerEl = document.querySelector("#header");
const pageContentEl = document.querySelector("#page-content");

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
let quizHandler = () => {
    const quizBioEl = document.createElement("div");
    quizBioEl.className = "wrapper"; 
    quizBioEl.textContent = "Are you ready to test your knowledge of all things javascript?"

    divEl.appendChild(quizBioEl);

    const startBtnEl = document.createElement("button") 
    startBtnEl.className = "wrapper btn"
    startBtnEl.textContent = "Start"

    divEl.appendChild(startBtnEl);

    const highScoreEl = document.createElement("div");
    highScoreEl.className = "header highScoreClick"; 
    highScoreEl.textContent = "view high scores!";

    headerEl.appendChild(highScoreEl);
    

}
//create a function to create elements that display as a quiz on the page. Display questions as radio 
const quizEl = () => {
    for( i = 0; i < quizQuestions.length; i++) {
        console.log("hello there");

        
    }

    
}

//function to iterate through questions to send through quizEl
const quiz = () => {

    quizQuestions.forEach((currentQuestion, questionNum) => {
        
    })

}

//create timer countdown 
function countdown() {
	timer--;
	document.getElementById("seconds").innerHTML = String("Time: " + timer );
	if (timer > 0) {
		setTimeout(countdown, 1000);
	}
};

setTimeout(countdown, 1000);

 //create submit button

//function to save and store high scores

//create function  to display high scores

//create listen function to listen for click on submit
pageContentEl.addEventListener('click', quizEl );
quizHandler();
quizEl();