//variable to hold quiz timer
let timer = 60; 

//variable to append text into 
const sectionEl = document.querySelector("#wrapper");
const quizContainerEl = document.querySelector("#quiz-container");
const headerEl = document.querySelector("#header");
const pageContentEl = document.querySelector("#page-content");
const startBtn = document.querySelector("#start-btn");
//array to hold all question objects 
//high score array
const highScoreArr = []


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
let currentQuestion = 0;    
//start button to create the quiz 
let quizHandler = (event) => {
    //remove current text to display questions
    let startStr = document.querySelector("#quiz");
    startStr.classList.add("hide");
    startBtn.classList.add("hide");
    countdown();
    createQuiz();
    
}

checkAnswer = function(event) {
    if(event.target.name === quizQuestions[currentQuestion].correctAnswer) {
        currentQuestion++;
        createQuiz();
    } 
    else {
        timer -=10;
        currentQuestion++;
        createQuiz();
    }
}

createQuiz = function() {
    quizContainerEl.innerHTML = "";
    if(quizQuestions.length > currentQuestion) {  

        //creates the question 
        const questionEl = document.createElement("h3");
        questionEl.textContent = quizQuestions[currentQuestion].question; 
        
        //creates answer buttons
        const answerElA = document.createElement("button");
        answerElA.className = "btn"; 
        answerElA.name = "a";
        answerElA.textContent = quizQuestions[currentQuestion].answers.a
        
        const answerElB = document.createElement("button");
        answerElB.className = "btn";
        answerElB.name = "b";
        answerElB.textContent = quizQuestions[currentQuestion].answers.b
        
        const answerElC = document.createElement("button");
        answerElC.className = "btn";
        answerElC.name = "c";
        answerElC.textContent = quizQuestions[currentQuestion].answers.c
        
        const answerElD = document.createElement("button");
        answerElD.className = "btn";
        answerElD.name = "d";
        answerElD.textContent = quizQuestions[currentQuestion].answers.d

        // const answerLiA = document.createElement("li"); 
        // const answerLiB = document.createElement("li");
        // const answerLiC = document.createElement("li");
        // const answerLiD = document.createElement("li");                     
        
        const answerUlEl = document.createElement("ul")
        
        
        answerUlEl.append(answerElA, answerElB, answerElC, answerElD)
        quizContainerEl.appendChild(questionEl); 
        quizContainerEl.appendChild(answerUlEl); 

        let optionsArr = document.querySelectorAll(".btn")
        for(i = 0; i < optionsArr.length; i++) {
            optionsArr[i].addEventListener("click", checkAnswer)
        }
}
}

highScore = function() {
    const submit = document.querySelector("#submit-initials");
    submit.classList.remove('hide');

    localStorage.setItem("highscore", timer);
    
    var submitBtn = document.querySelector("#submit");
    
    submitBtn.addEventListener("onSubmit", function() {
        let saveName = document.querySelector("#initials").value;
        localStorage.setItem("userName", saveName);
        console.log(saveName);
    })
    


}






        
        



        
        




    



//create timer countdown 
function countdown() {
	timer--;
	document.getElementById("seconds").innerHTML = String("Time: " + timer );
	if (timer > 0 && currentQuestion  < quizQuestions.length) {
		setTimeout(countdown, 1000);
	}
    else 
    {
        highScore();
    }
};



 //create submit button

//function to save and store high scores

//create function  to display high scores

//create listen function to listen for click on submit
startBtn.addEventListener('click', quizHandler );