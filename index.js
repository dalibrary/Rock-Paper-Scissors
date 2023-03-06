// Random Computer choice to give Rock, Paper, or scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) //Random Number from 0,1,2
        if (randomNumber == 0) {
            return "Rock";
    }   else if (randomNumber == 1) {
            return "Scissors";
    }   else {
        return "Paper";
    }
}

