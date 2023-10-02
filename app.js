// 1. Create function that randomly returns rock, paper or scissors.
// 2. Create function that simulates one round by taking in both inputs.
// 3. Create function that allows to play X amount of rounds while saving score.

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * (2 + 1));
  return randomNumber == 2 ? "ROCK" : randomNumber == 1 ? "PAPER" : "SCISSORS";
}

let score = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
    return score
  }
  if (playerSelection == "ROCK" & computerSelection == "PAPER") {
    console.log("You lose!");
    return score--
  }
  if (playerSelection == "ROCK" & computerSelection == "SCISSORS") {
    console.log("You win!");
    return score++
  }
  if (playerSelection == "PAPER" & computerSelection == "SCISSORS") {
    console.log("You lose!");
    return score--
  }
  if (playerSelection == "PAPER" & computerSelection == "ROCK") {
    console.log("You win!");
    return score++
  }
  if(playerSelection == "SCISSORS" & computerSelection == "ROCK") {
    console.log("You lose!")
    return score--
  }
  if (playerSelection == "SCISSORS" & computerSelection == "PAPER") {
    console.log("You win!");
    return score++
  }
}

function game(rounds) {
  for (let i=0; i < rounds; i++) {
    let playerSelection = prompt("Rock, paper or scissors?").toUpperCase();
    let computerSelection = getComputerChoice();
    
    playRound(playerSelection, computerSelection);

    // if statement so score doesn't go below 0
    score < 0 ? score = 0 : score; 
    console.log(score);
  }
}

game(5);