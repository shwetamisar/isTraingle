const quizForm=document.querySelector('.quiz-form');
const quizSubmitButton=document.querySelector('#submit-answer-btn');
const quizOutput=document.querySelector('#output');

const correctAnswer = ["120°,50°,10°","120°"];

quizSubmitButton.addEventListener("click",calculateScore)

function calculateScore(){
 let score=0;
 let index=0;
 const formResults = new FormData(quizForm);
 for(let value of formResults.values()){
    if(value === correctAnswer[index]){;
        score=score+1;
    }
    index=index+1;
 }
 quizOutput.innerText = "Your score is "+ score;
}

