// Store choices on a list.
const choices = ["ROCK", "PAPER", "SCISSORS"];
let computerScore = 0;
let userScore = 0;

// Will randomly land on one of the 'choices' indexes when executed.
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function btnValue(e) {
  let userChoice = e.target.innerText;
  if (computerScore == 5 && computerScore > userScore) {
    txtDisplay.innerText = "Computer wins the match!";
    uScore.innerText = `YOU: ${userScore}`;
    cScore.innerText = `COMPUTER: ${computerScore}`;
    computerScore = 0;
    userScore = 0;
    uScore.innerText = `YOU: ${userScore}`;
    cScore.innerText = `COMPUTER: ${computerScore}`;
  } else if (userScore == 5 && userScore > computerScore) {
    txtDisplay.innerText = "You won the match!";
    uScore.innerText = `YOU: ${userScore}`;
    cScore.innerText = `COMPUTER: ${computerScore}`;
    computerScore = 0;
    userScore = 0;
    uScore.innerText = `YOU: ${userScore}`;
    cScore.innerText = `COMPUTER: ${computerScore}`;
  } else {
    playRound(getComputerChoice(), userChoice);
  }
}

const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');

btnRock.addEventListener('click', btnValue);
btnPaper.addEventListener('click', btnValue);
btnScissors.addEventListener('click', btnValue);

const cScore = document.getElementById('cScore');
const uScore = document.getElementById('uScore');
const txtDisplay = document.getElementById('txtDisplay');

// Plays a round with the computer choice and the player choice.
function playRound(computerChoice, playerChoice) {
  if (computerChoice == "ROCK" && playerChoice == "PAPER") {
    userScore++
    uScore.innerText = `YOU: ${userScore}`;
    txtDisplay.innerText = 'You won, paper beats rock!';
  } else if (computerChoice == "ROCK" && playerChoice == "SCISSORS") {
    computerScore++
    cScore.innerText = `COMPUTER: ${computerScore}`;
    txtDisplay.innerText = 'You lost, rock beats scissors!';
  } else if (computerChoice == "PAPER" && playerChoice == "SCISSORS") {
    userScore++
    uScore.innerText = `YOU: ${userScore}`;
    txtDisplay.innerText = 'You won, scissors beats paper!';
  } else if (computerChoice == "PAPER" && playerChoice == "ROCK") {
    computerScore++
    cScore.innerText = `COMPUTER: ${computerScore}`;
    txtDisplay.innerText = 'You lost, paper beats rock!';
  } else if (computerChoice == "SCISSORS" && playerChoice == "ROCK") {
    userScore++
    uScore.innerText = `YOU: ${userScore}`;
    txtDisplay.innerText = 'You won, rock beats scissors!';
  } else if (computerChoice == "SCISSORS" && playerChoice == "PAPER") {
    computerScore++
    cScore.innerText = `COMPUTER: ${computerScore}`;
    txtDisplay.innerText = 'You lost, scissors beats paper!';
  } else {
    txtDisplay.innerText = "It's a tie!";
  }
};