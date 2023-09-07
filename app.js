// 1. Create function that randomly returns rock, paper or scissors.

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * (2 + 1));
  console.log(randomNumber);
  return randomNumber == 2 ? "ROCK" : randomNumber == 1 ? "PAPER" : "SCISSORS";
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());