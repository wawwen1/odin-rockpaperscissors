// 1. Create function that randomly returns rock, paper or scissors.
// 2. Create function that simulates one round by taking in both inputs.
// 3. Create function that allows to play X amount of rounds while saving score.

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * (2 + 1));
  return randomNumber == 2 ? "ROCK" : randomNumber == 1 ? "PAPER" : "SCISSORS";
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  let resultMessage;
  if (playerSelection == computerSelection) {
    resultMessage = "It's a tie!";
  }
  if ((playerSelection == "ROCK") & (computerSelection == "PAPER")) {
    resultMessage = "You lose!";
    computerScore++;
  }
  if ((playerSelection == "ROCK") & (computerSelection == "SCISSORS")) {
    resultMessage = "You win!";
    playerScore++;
  }
  if ((playerSelection == "PAPER") & (computerSelection == "SCISSORS")) {
    resultMessage = "You lose!";
    computerScore++;
  }
  if ((playerSelection == "PAPER") & (computerSelection == "ROCK")) {
    resultMessage = "You win!";
    playerScore++;
  }
  if ((playerSelection == "SCISSORS") & (computerSelection == "ROCK")) {
    resultMessage = "You lose!";
    computerScore++;
  }
  if ((playerSelection == "SCISSORS") & (computerSelection == "PAPER")) {
    resultMessage = "You win!";
    playerScore++;
  }
  gameResult(resultMessage);
}

const gameResult = (message) => {
  let resultDiv = document.querySelector(".result");
  resultDiv.textContent = message;
};

const updatePlayerScore = () => {
  let playerScoreDiv = document.querySelector(".playerScore");
  playerScoreDiv.textContent = "Player Score: " + playerScore;

  if (playerScore == 5) {
    announceWinner("Player 1 is the winner!");
  }
};

const updateComputerScore = () => {
  let computerScoreDiv = document.querySelector(".computerScore");
  computerScoreDiv.textContent = "Computer Score: " + computerScore;

  if (computerScore == 5) {
    announceWinner("Computer is the winner!");
  }
};

const announceWinner = (message) => {
  let winnerDiv = document.querySelector(".winner");
  winnerDiv.textContent = message;
  setTimeout(() => {
    document.location.reload();
    window.alert(message);
  }, 100);
};

const buttonClick = (selection) => {
  let computerSelection = getComputerChoice();
  playRound(selection, computerSelection);

  updatePlayerScore();
  updateComputerScore();
};

document.querySelector("#rockButton").addEventListener("click", function () {
  buttonClick("ROCK");
});

document.querySelector("#paperButton").addEventListener("click", function () {
  buttonClick("PAPER");
});

document.querySelector("#scissorsButton").addEventListener("click", function () {
  buttonClick("SCISSORS");
  });
