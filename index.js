// Winning conditions in Rock, Paper, Scissors
const winConditions = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock" 
}

// Random Computer choice to give Rock, Paper, or scissors
function getComputerChoice() {
    const computerChoices = Object.keys(winConditions);
    let randomNumber = Math.floor(Math.random() * 3) //Random Number from 0,1,2
    return computerChoices[randomNumber]
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
    }
}

// GAME
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

game();