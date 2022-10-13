// Store choices on a list.
const choices = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let userScore = 0;

// Will randomly land on one of the 'choices' indexes when executed.
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

// Will ask the user his choice via prompt, and then it will lowercase the word and capitalize the first letter.
function playerChoice() {
  let choice = prompt("Type your choice (Rock, Paper or Scissors)", "");
  choice = choice.toLowerCase();
  choice = choice[0].toUpperCase() + choice.slice(1);
  return choice;
}

// Plays a round with the computer choice and the player choice.
function playRound(computerChoice, playerChoice) {
  computerChoice == "Rock" && playerChoice == "Paper" ? console.log(`You won, paper beats rock!${userScore++}`) : 
  computerChoice == "Rock" && playerChoice == "Scissors" ? console.log(`You lost, rock beats scissors!${computerScore++}`) : 
  computerChoice == "Paper" && playerChoice == "Scissors" ? console.log(`You won, scissors beats paper!${userScore++}`) : 
  computerChoice == "Paper" && playerChoice == "Rock" ? console.log(`You lost, paper beats rock!${computerScore++}`) : 
  computerChoice == "Scissors" && playerChoice == "Rock" ? console.log(`You won, rock beats scissors!${userScore++}`) : 
  computerChoice == "Scissors" && playerChoice == "Paper" ? console.log(`You lost, scissors beats paper!${computerScore++}`) : 
  console.log("It's a tie!");
}

// Plays the indicated amount of rounds and the player with most points wins.
function game(rounds) {
  computerScore = 0;
  userScore = 0;
  for (let i = 0; i < rounds; i++) {
    playRound(getComputerChoice(), playerChoice());
  }
  computerScore > userScore ? console.log(`You lost, the computer scored: ${computerScore} and you: ${userScore}`) : 
  computerScore < userScore ? console.log(`You won, you scored: ${userScore} and the computer: ${computerScore}`) :
  console.log(`It's a tie, you scored: ${userScore} and the computer: ${computerScore}`);
}