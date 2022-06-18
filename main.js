var question = document.getElementById('question');
var playerAnswer = document.getElementById('answer');
var factor1 = document.getElementById('factor1');
var factor2 = document.getElementById('factor2');

function send(){
    question.innerHTML = factor1.value + ' X ' + factor2.value;
}
function checkAnswer(){
    var realAnswer = factor1.value * factor2.value;
    if(playerAnswer.value == realAnswer){
        console.log('This is the correct answer! :)');
    }
    else{
        console.log('This is not the correct answer! The correct answer is: ' + realAnswer + ', your answer was: ' + playerAnswer.value);
    }
}