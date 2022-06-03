let playerSelection = prompt("Please type rock, paper, or scissors.").toLocaleLowerCase();

console.log("You have selected " + playerSelection + ".");

function computerPlay() {
    let rndInt = Math.floor(Math.random() * 3);
    if (rndInt === 0) {
        return "rock";
    } else if (rndInt === 1) {
        return "paper";
    } else if (rndInt === 2) {
        return "scissors";
    } else {
        return "something went wrong";
    }
    }

    console.log("The computer has selected " + computerPlay() + ".");

let computerSelection = computerPlay();

function round() {

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Tie game!";
        } else if (computerSelection === "paper") {
            return "Paper beats rock! You lose!";
        } else if (computerSelection === "scissors") {
            return "Rock beats scissors! You win!";
        } 

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "Paper beats rock! You win!";
        } else if (computerSelection === "paper") {
            return "Tie game!";
        } else if (computerSelection === "scissors") {
            return "Scissors beats paper! You lose!";
        } 

    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Rock beats scissors! You lose!";
        } else if (computerSelection === "paper") {
            return "Scissors beats paper! You win!";
        } else if (computerSelection === "scissors") {
            return "Tie game!";
        }    
        
        } else { 
            return "Please input a valid option.";
    }
    }

    console.log(round());













