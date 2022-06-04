function playerSelection() {
    const select = prompt("Please type rock, paper, or scissors.").toLocaleLowerCase();
    return select;
} 

function computerPlay() {
    const rndInt = Math.floor(Math.random() * 3);
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

function round(pSelection, cSelection) {
    console.log("You selected " + pSelection + ".");
    console.log("The computer has selected " + cSelection + ".");
    if (pSelection === "rock") {
        if (cSelection === "rock") {
            return "Tie game!";
        } else if (cSelection === "paper") {
            return "Paper beats rock! You lose!";
        } else if (cSelection === "scissors") {
            return "Rock beats scissors! You win!";
        } 
    } else if (pSelection === "paper") {
        if (cSelection === "rock") {
            return "Paper beats rock! You win!";
        } else if (cSelection === "paper") {
            return "Tie game!";
        } else if (cSelection === "scissors") {
            return "Scissors beats paper! You lose!";
        } 
    } else if (pSelection === "scissors") {
        if (cSelection === "rock") {
            return "Rock beats scissors! You lose!";
        } else if (cSelection === "paper") {
            return "Scissors beats paper! You win!";
        } else if (cSelection === "scissors") {
            return "Tie game!";
        }    
        } else { 
            return "Please input a valid option.";
    }
    }

    for (let i = 0; i < 5; i++) {
    console.log(round(playerSelection(), computerPlay()));
    }
















