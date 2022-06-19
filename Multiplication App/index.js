const inputEl = document.querySelector(".input");
const containerEl = document.querySelector(".container");
const quizEl = document.querySelector(".quiz");

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);


const scoreEl = document.querySelector(".score");

let score = JSON.parse(localStorage.getItem("score"));

scoreEl.innerText = `score: ${score}`;

const correctAns = num1 * num2;

quizEl.innerText = `What is ${num1} multiply by ${num2}`;

containerEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;

    if (userAns === correctAns) {
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage();
    }
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
