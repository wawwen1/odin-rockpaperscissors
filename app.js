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

const gameResult = (message) => {
  let resultDiv = document.querySelector("result");
  resultDiv.textContent = message;
};

const updateScore = () => {
  let scoreDiv = document.querySelector("score");
  scoreDiv.textContent = "Score: " + score;
};

const buttonClick = (selection) => {
  let computerSelection = getComputerChoice();
  playRound(selection, computerSelection);
  // if statement so score doesn't go below 0
  score < 0 ? (score = 0) : score;
  updateScore();
};

document.querySelector("#rockButton").addEventListener("click", function () {
  buttonClick("rock")
});

document.querySelector("#paperButton").addEventListener("click", function () {
  buttonClick("paper")
});

document.querySelector("#scissorsButton").addEventListener("click", function () {
    buttonClick("scissors")
  });
