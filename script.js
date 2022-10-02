// Store choices on a list.
choices = ["Rock", "Paper", "Scissors"];

// Computer choice, will randomly land on one of the indexes of the 'choices' list every time it runs.
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

// Will ask the user via prompt his option, and then it will lowercase the word an capitalize the first letter.
function playerChoice() {
  let choice = prompt("Type your choice (Rock, Paper or Scissors)", "");
  choice = choice.toLowerCase();
  choice = choice[0].toUpperCase() + choice.slice(1);
  return choice;
}

// Plays a round with the computer choice and the player choice.
function playRound(computerChoice, playerChoice) {
  computerChoice == "Rock" && playerChoice == "Paper" ? console.log("You won, paper beats rock!") : 
  computerChoice == "Rock" && playerChoice == "Scissors" ? console.log("You lost, rock beats scissors!") : 
  computerChoice == "Paper" && playerChoice == "Scissors" ? console.log("You won, scissors beats paper!") : 
  computerChoice == "Paper" && playerChoice == "Rock" ? console.log("You lost, paper beats rock!") : 
  computerChoice == "Scissors" && playerChoice == "Rock" ? console.log("You won, rock beats scissors!") : 
  computerChoice == "Scissors" && playerChoice == "Paper" ? console.log("You lost, scissors beats paper!") : 
  console.log("It's a tie!");
}