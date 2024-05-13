// 1. Create function that randomly returns rock, paper or scissors.
// 2. Create function that simulates one round by taking in both inputs.
// 3. Create function that allows to play X amount of rounds while saving score.

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * (2 + 1));
  return randomNumber == 2 ? "ROCK" : randomNumber == 1 ? "PAPER" : "SCISSORS";
}

let score = 0;

function playRound(playerSelection, computerSelection) {
  let resultMessage;
  if (playerSelection == computerSelection) {
    resultMessage = "It's a tie!";
    score;
  }
  if ((playerSelection == "ROCK") & (computerSelection == "PAPER")) {
    resultMessage = "You lose!";
    score--;
  }
  if ((playerSelection == "ROCK") & (computerSelection == "SCISSORS")) {
    resultMessage = "You win!";
    score++;
  }
  if ((playerSelection == "PAPER") & (computerSelection == "SCISSORS")) {
    resultMessage = "You lose!";
    score--;
  }
  if ((playerSelection == "PAPER") & (computerSelection == "ROCK")) {
    resultMessage = "You win!";
    score++;
  }
  if ((playerSelection == "SCISSORS") & (computerSelection == "ROCK")) {
    resultMessage = "You lose!";
    score--;
  }
  if ((playerSelection == "SCISSORS") & (computerSelection == "PAPER")) {
    resultMessage = "You win!";
    score++;
  }
  gameResult(resultMessage);
}

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    let playerSelection = prompt("Rock, paper or scissors?").toUpperCase();
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    // if statement so score doesn't go below 0
    score < 0 ? (score = 0) : score;
    console.log(score);
  }
}

const gameResult = (message) => {
  let resultDiv = document.querySelector("result");
  resultDiv.textContent = message;
};

const updateScore = () => {
  let scoreDiv = document.querySelector("score");
  scoreDiv.textContent = "Score: " + score;
};

document.querySelector("#rockButton").addEventListener("click", function () {
  console.log("rock");
});

document.querySelector("#paperButton").addEventListener("click", function () {
  console.log("paper");
});

document
  .querySelector("#scissorsButton")
  .addEventListener("click", function () {
    console.log("scissors");
  });
