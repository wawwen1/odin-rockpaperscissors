// 1. Create function that randomly returns rock, paper or scissors.

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * (2 + 1));
  return randomNumber == 2 ? "ROCK" : randomNumber == 1 ? "PAPER" : "SCISSORS";
}

// 2. Create function that simulates one round by taking in both inputs.
let playerSelection = prompt("Rock, paper or scissors?").toUpperCase();
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
    return "TIE"
  }
  if (playerSelection == "ROCK" & computerSelection == "PAPER") {
    console.log("You lose!");
    return "LOSE"
  }
  if (playerSelection == "ROCK" & computerSelection == "SCISSORS") {
    console.log("You win!");
    return "WIN"
  }
  if (playerSelection == "PAPER" & computerSelection == "SCISSORS") {
    console.log("You lose!");
    return "LOSE"
  }
  if (playerSelection == "PAPER" & computerSelection == "ROCK") {
    console.log("You win!");
    return "WIN"
  }
  if(playerSelection == "SCISSORS" & computerSelection == "ROCK") {
    console.log("You lose!")
    return "LOSE"
  }
  if (playerSelection == "SCISSORS" & computerSelection == "PAPER") {
    console.log("You win!");
    return "WIN"
  }
}


playRound(playerSelection,computerSelection);