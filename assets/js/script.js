//variable to hold quiz timer
let timer;

//variable to append text into 
const quizContainerEl = document.querySelector("#quiz-container");
const startBtn = document.querySelector("#start-btn");
const submitBtn = document.querySelector("#submit");
const submit = document.querySelector("#submit-initials");
const hsScreen = document.querySelector("#hs-screen");
const retryBtn = document.querySelector("#retry-btn");
const clearDataBtn = document.querySelector("#clear-data");
//array to hold all question objects 

const getHighScores = JSON.parse(localStorage.getItem("highScores")) || [];

const quizQuestions = [ 
{
    question: 'What are boolean values?',
    answers: {
        a: 'Probably some kind of cheese',
        b: 'WW2',
        c: 'Values relating to true or false',
        d: 'Node.js' 
    },
    correctAnswer: "c",
},
{
    question: 'Strings are what kind of data type in JS?',
    answers: {
        a: 'String Cheese',
        b: 'Primitive',
        c: 'Undefined',
        d: 'Objects' 
    },
    correctAnswer: "b",
},
{
    question: 'What method pushes something into an array?',
    answers: {
        a: '.push()',
        b: 'localStorage.setItem()',
        c: '.cookies();',
        d: '.splice()'
    },
    correctAnswer: "a",
},
{
    question: 'Which of the following is a way to set a function',
    answers: { 
        a: '.setFunction()',
        b: 'Please make this a function (that works)',
        c: '=>',
        d: '.undefined()',
    },
    correctAnswer: "c",
}
];


let currentQuestion = 0;    

//start button to create the quiz 
let quizHandler = (event) => {
    // debugger;
    currentQuestion = 0;
    timer = 60;
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
        quizContainerEl.classList.remove('hide');

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

displayScores = function() {
    //hide previous screen
    submit.classList.add('hide');
    hsScreen.classList.remove('hide');
    const listedScoreEl = document.querySelector("#hs")

    listedScoreEl.innerHTML = getHighScores.map( (score) => {
        return `<li class="list">${score.name}-${score.score}</li>`; 
    }).join("");
    
    //display high scores
    // highScoreArr.forEach( (score) => {
    // listedScore = document.createElement("li");
    // listedScore.textContent = score;
    
    // listedScoreEl.appendChild(listedScore);    
    // })

}

saveHighScore = function() {
    quizContainerEl.classList.add('hide');
    submit.classList.remove('hide');    
    submitBtn.addEventListener("click", function() {
        event.preventDefault();
        let saveName = document.querySelector("#initials").value;
          saveName = saveName.toUpperCase();
              if(saveName === "") {
                  alert("You must enter a value");
              } else
              {
                const score = {
                    score: timer, 
                    name: saveName
                };
                getHighScores.push(score);
                //sore scores from highest to lowest
                getHighScores.sort( (a,b) => b.score - a.score);
                //keeps scores at a maximum of 10 
                getHighScores.splice(10);
                console.log(getHighScores);
                //sends scores to local storage
                localStorage.setItem('highScores',  JSON.stringify(getHighScores));
                // debugger;
                //executes to display scores screen
                displayScores();
              }
              
    })
}

//create timer countdown 
function countdown() {
	timer--;
	document.getElementById("seconds").innerHTML = String("Time: " + timer );
	if (timer > 0 && currentQuestion  < quizQuestions.length) {
		setTimeout(countdown, 1000);
	} else
    {
        saveHighScore();
    }
};

//create listen function to listen for click on submit
startBtn.addEventListener('click', quizHandler );
retryBtn.addEventListener('click', function (){
    location.reload();
} );
clearDataBtn.addEventListener('click', function() {
    localStorage.clear('highScores');
})
