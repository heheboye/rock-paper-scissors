choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playerChoice() {
  let choice = prompt("Type your choice (Rock, Paper or Scissors)", "");
  choice = choice.toLowerCase();
  choice = choice[0].toUpperCase() + choice.slice(1);
  return choice;
}