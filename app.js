const submitBtn = document.querySelector("#submit-btn");
const question = document.querySelector(".question");
const answer = document.querySelector("#answer");
const scoreUpdate = document.querySelector("#score-update");

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

question.textContent = `What is ${num1} X ${num2}?`;

let result = num1 * num2;

submitBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let score = parseInt(scoreUpdate.textContent);

    let userAns = answer.value;
    if(userAns == result){
        score++;
        updateScore(score);
    }else{
        score--;
        updateScore(score);
    }
});

const updateScore = (score) => {
    scoreUpdate.textContent = score;

    // to generate new question
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    question.textContent = `What is ${num1} X ${num2}?`;
    result = num1 * num2;
    answer.value = "";  // to make input field empty
}