// Random Computer choice to give Rock, Paper, or scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) //Random Number from 0,1,2
        if (randomNumber == 0) {
            return "rock";
    }   else if (randomNumber == 1) {
            return "scissors";
    }   else {
        return "paper";
    }
}

/* function playRound(playerSelection, computerSelection) {
    if (playSelection === computerSelection) {
        console.log("Tie");
    }
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") || //player win conditions
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
    )  {
        playerScore++;
    }
    if  (//computer win conditions
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Scissors" && playerSelection === "Paper") ||
        (computerSelection === "Paper" && playerSelection === "Rock") ||
    )   {
        computerScore++;
    }
} */

/* function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Tie";
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      computerScore++
    }
} */

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
      return "Tie";
    } 
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      return `You Win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } 
    if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
      ) {
        return `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
      }
}


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
    } else if (result.includes("Lose")) {
      computerScore++;
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