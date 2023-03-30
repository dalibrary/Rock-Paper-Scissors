/* // Winning conditions in Rock, Paper, Scissors
const winConditions = [{
  name: 'rock',
  beats: 'scissors'
},
{
  name: 'paper',
  beats: 'rock'
},
{
  name: 'scissors',
  beats: 'paper'
}
]

// Random Computer choice to give Rock, Paper, or scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) //Random Number from 0,1,2
    return winConditions[randomNumber]
  }

// play a round of RPS
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
      return `Tied! You chose ${playerSelection} and the computer chose ${computerSelection}`
    } 

    if (winConditions[playerSelection] === computerSelection) {
    return `You Win! You chose ${playerSelection} and the computer chose ${computerSelection}`
    } else {
      return `You Lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } */
/* } */

/* // GAME
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Enter Rock, Paper, or Scissors: ");
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("Win")) {
      playerScore++;
      console.log(`Player score is: ${playerScore} Computer score is : ${computerScore}`);
    } else if (result.includes("Lose")) {
      computerScore++;
      console.log(`Player score is: ${playerScore} Computer score is : ${computerScore}`);
    }
}
    if (playerScore > computerScore) {
        console.log("You win the game!");
    }  else if (computerScore > playerScore) {
        console.log("You lose the game!");
    }  else {
        console.log ("The game is tied!");
    }
}

game(); */

// UI


/* 
1. play game when player clicks a choice
- playerChoice
- computerChoice
- determine winner
- show result
2. restart game when player clicks restart button
3. check for winning score of 5
4. end game button

*/

let pScore = 0;
let cScore = 0;
const playerScore = document.querySelector('.player-score p');
const computerScore = document.querySelector('.computer-score p');

function compareChoices(playerChoice, computerChoice) {
  const winner = document.querySelector('.winner')
  //Checking for Tie
  if (playerChoice === computerChoice) {
    winner.textContent = 'Tie!';
    return;
  }
  //Check for Rock
  if (playerChoice === 'rock') {
    if (computerChoice ==='scissors') {
      winner.textContent = 'Player Wins'
      pScore++;
      playerScore.textContent = pScore;
      return;
    } else {
      winner.textContent = 'Computer Wins';
      cScore++;
      computerScore.textContent = cScore;
      return;
    }
  }
//Check for Scissors
  if (playerChoice === 'scissors')
    if (computerChoice ==='paper') {
      winner.textContent = 'Player Wins'
      pScore++;
      playerScore.textContent = pScore;
      return;
    } else {
      winner.textContent = 'Computer Wins';
      cScore++;
      computerScore.textContent = cScore;
      return;
    }
//Check for Paper
    if (playerChoice === 'paper')
      if (computerChoice ==='rock') {
      winner.textContent = 'Player Wins'
      pScore++;
      playerScore.textContent = pScore;
      return;
    } else {
      winner.textContent = 'Computer Wins';
      cScore++;
      computerScore.textContent = cScore;
      return;
    }
} 
//Play Match
const playMatch = () => {
  const choices = document.querySelectorAll('.choices button');
  const playerHand = document.querySelector('.playerHand');
  const computerHand = document.querySelector('.computerHand');
  const computerOptions = ['rock', 'paper', 'scissors'];

  choices.forEach(choice => {
    choice.addEventListener('click', function() {
      const randomNumber = Math.floor(Math.random() * computerOptions.length);
      const computerChoice = computerOptions[randomNumber];
      compareChoices(this.textContent, computerChoice);
      playerHand.src = `./src/${this.textContent}.png`;
      computerHand.src = `./src/${computerChoice}.png`;
    })
  });
};

playMatch();
