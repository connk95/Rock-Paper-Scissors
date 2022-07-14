let select = window.prompt("Please type rock, paper, or scissors.");
let playerSelection = select.toLowerCase();

console.log("You have selected " + playerSelection + ".");

function computerPlay(rps) {
    let result;
    let rndInt = Math.floor(Math.random() * 3);
    if (rndInt == 0) {
        result = "rock";
    } else if (rndInt == 1) {
        result = "paper";
    } else if (rndInt == 2) {
        result = "scissors";
    } else {
        result = "something went wrong";
    }
    return result;
    }

    console.log("The computer has selected " + computerPlay() + ".");


function round(rock, paper, scissors) {
    let result;

    switch (computerPlay() == rock) {
    
        case playerSelection == rock:
            result = "Tie game!";
            break;
        case playerSelection == paper:
            result = "Paper beats rock! You win!"
            break;
        case playerSelection == scissors:
            result = "Rock beats scissors! You lose!"
            break;
        default:
            result = "Something went wrong."
    }

    switch (computerPlay() == paper) {

        case playerSelection == rock:
            result = "Paper beats rock! You lose!"
            break;
        case playerSelection == paper:
            result = "Tie game!"
            break;
        case playerSelection == scissors:
            result = "Scissors beats paper! You win!"
            break;
        default:
            result = "Something went wrong."
    }

    switch (computerPlay() == scissors) {

        case playerSelection == rock:
            result = "Rock beats scissors! You win!"
            break;
        case playerSelection == paper:
            result = "Scissors beats paper! You lose!"
            break;
        case playerSelection == scissors:
            result = "Tie game!"
        default:
            result = "Something went wrong."
    }
    return result;
    }

    console.log(round());
    