//variable to hold quiz timer
let timer;

//variable to append text into 
const quizContainerEl = document.querySelector("#quiz-container");
const startBtn = document.querySelector("#start-btn");
const submitBtn = document.querySelector("#submit");
const submit = document.querySelector("#submit-initials");
const hsScreen = document.querySelector("#hs-screen");
const retryBtn = document.querySelector("#retry-btn");

//array to hold all question objects 

const getHighScores = JSON.parse(localStorage.getItem("highScores")) || [];

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
    // debugger;
    currentQuestion = 0;
    timer = 60;
    createQuiz();
    countdown();
    
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

// scoreScreen = function(realArr) {
//     console.log("scoreScreen");
//     console.log(highScoreArr);
//     //hide previous screen
//     submit.classList.add('hide');
//     hsScreen.classList.remove('hide');
//     const listedScoreEl = document.querySelector("#hs")

//     listedScoreEl.append(realArr);
//     //sort array
    
//     //display high scores
//     // highScoreArr.forEach( (score) => {
//     // listedScore = document.createElement("li");
//     // listedScore.textContent = score;
    
//     // listedScoreEl.appendChild(listedScore);    
//     // })

// }

saveHighScore = function() {
    quizContainerEl.classList.add('hide');
    submit.classList.remove('hide');    
    submitBtn.addEventListener("click", function() {
        event.preventDefault();
        const saveName = document.querySelector("#initials").value;  
              if(saveName === "") {
                  alert("You must enter a value");
              }
        const score = {
            score: timer, 
            name: saveName
        };
        getHighScores.push(score);
        console.log(getHighScores);

        getHighScores.sort( (a,b) => b.score - a.score)
        getHighScores.splice(10);

        localStorage.setItem('highScores',  JSON.stringify(getHighScores));
    })
}
    


// }

// getHighScores = function() {
//     let savedScores = []
//     savedScores.push(localStorage.getItem("highScore"));
//     console.log(savedScores);
//     if(!savedScores) {
//         console.log("false");
//         return false; 
//     }
//     for(i = 0; i < savedScores.length; i++) {
//     savedScores.push(highScoreArr[i]);
//     }
//     savedScores = localStorage.getItem("highScore");
//     console.log(savedScores);
// }



// function checkHighScore(score) {
//     const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
//     const lowestScore = highScores[highScoreLimit - 1]?.score ?? 0;
    
//     if (score > lowestScore) {
//       saveHighScore(score, highScores); // TODO
//       showHighScores(); // TODO
//     }
//   }

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



 //create submit button

//function to save and store high scores

//create function  to display high scores

//create listen function to listen for click on submit
startBtn.addEventListener('click', quizHandler );
retryBtn.addEventListener('click', function (){
    hsScreen.classList.add('hide');
    quizHandler();
} );