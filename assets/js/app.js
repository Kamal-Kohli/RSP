const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

// availableQuestion Array
function setAvailabeQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}

// set question, options, and question number
function getNewQuestion(){
    // Question Number
    questionNumber.innerHTML = " Question " + (questionCounter + 1) + " of " + quiz.length;


    // Question and Set random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    //get the position of Question from availableQuestion Array
    const index1= availableQuestions.indexOf(questionIndex);

    // remove the questionIndex from availableQuestion for doesn't repeat the question
    availableQuestions.splice(index1,1);
    // push options to availableOptions Array
    const optionLen = currentQuestion.options.length
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }

    for(let i=0; i<optionLen; i++){
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[i];
        option.id = i;
        option.className = "option";
        optionContainer.appendChild(option)
    }

    questionCounter++
}

function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over")
    } 
    else{
        getNewQuestion();
    }
}

window.onload = function(){

    setAvailabeQuestions();

    getNewQuestion();
}