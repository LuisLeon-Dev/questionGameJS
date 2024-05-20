const questions = [
  "What was the first studio album released by The Beatles?",
  "Who is known as the 'King of Pop'?",
  "What instrument did Jimi Hendrix play?",
  "What is the name of the best-selling album of all time?",
  "What is the full name of the band led by Freddie Mercury?",
];
const answers = [];
const gameDisplay = document.querySelector(".game");
const startGameDisplay = document.querySelector(".startGame");
const totalAnswers = document.getElementById("totalAnswers");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const timer = document.getElementById("timer");
const nextQuestion = document.getElementById("nextButton");
const restartGame = document.getElementById("restartButton");
const btnStartGame = document.getElementById("btnStart");
const allAnswers = document.getElementById("allAnswers");
let currentQuestion = 0;
let clockTiming = 30;
let clockTiking;

gameDisplay.style.display = "none";
restartGame.style.display = "none";
question.textContent = questions[currentQuestion];
timer.textContent = clockTiming;

function clock() {
  clockTiking = setInterval(function () {
    clockTiming--;
    if (clockTiming <= 0) {
      clearInterval(clockTiking);
      timer.textContent = "Time's Up";
      nextQuestion.style.display = "none";
      restartGame.style.display = "block";
    } else {
      timer.textContent = clockTiming;
    }
  }, 1000);
}

function showNextQuestions() {
  currentQuestion++;
  answers.push(answer.value);
  answer.value = "";

  if (currentQuestion >= questions.length) {
    clearInterval(clockTiking);
    question.textContent = "You've finish the quiz!";
    nextQuestion.style.display = "none";
    restartGame.style.display = "block";
    showAllAnswers();
    console.log(answers);
  } else {
    question.textContent = questions[currentQuestion];
  }
}

function startGame() {
  gameDisplay.style.display = "block";
  startGameDisplay.style.display = "none";
  clock();
}

function showAllAnswers() {
  let date = new Date();
  let currentDate = date.toLocaleDateString("es-ES");
  let currentTime = date.toLocaleTimeString();
  allAnswers.innerHTML = `
          <p>Your firt answer was: ${answers[0]}</p>
          <p>Your second answer was: ${answers[1]}</p>
          <p>Your third answer was: ${answers[2]}</p>
          <p>Your fourth answare was: ${answers[3]}</p>
          <p>Your fifth answare was: ${answers[4]}</p>
          <p>Date: ${currentDate} Time: ${currentTime}</p>
  `;
}

btnStartGame.addEventListener("click", startGame);
nextQuestion.addEventListener("click", showNextQuestions);
restartGame.addEventListener("click", function () {
  location.reload();
});
