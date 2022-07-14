let userChoice;
let computerChoice;
let play;
let wins = 0;
let losses = 0;
let rounds = 0;

if (wins === 0 && losses === 0 && rounds === 0) {
    intro.innerHTML = "Let's play! First to 5!";
}

const rockButton = document.querySelector('.rockButton');
rockButton.addEventListener('click', () => {
    userChoice = 'rock';
    const rndInt = Math.floor(Math.random() * 3);
    if (rndInt === 0) {
        computerChoice = "rock";
    } else if (rndInt === 1) {
        computerChoice = "paper";
    } else if (rndInt === 2) {
        computerChoice = "scissors";
    } else {
        computerChoice = "something went wrong";
    }
    play = round(userChoice, computerChoice);
    scores();
    scoreboard();
});

const paperButton = document.querySelector('.paperButton');
paperButton.addEventListener('click', () => {
    userChoice = 'paper';
    const rndInt = Math.floor(Math.random() * 3);
    if (rndInt === 0) {
        computerChoice = "rock";
    } else if (rndInt === 1) {
        computerChoice = "paper";
    } else if (rndInt === 2) {
        computerChoice = "scissors";
    } else {
        computerChoice = "something went wrong";
    }
    play = round(userChoice, computerChoice);
    scores();
    scoreboard();
});

const scissorsButton = document.querySelector('.scissorsButton');
scissorsButton.addEventListener('click', () => {
    userChoice = 'scissors';
    const rndInt = Math.floor(Math.random() * 3);
    if (rndInt === 0) {
        computerChoice = "rock";
    } else if (rndInt === 1) {
        computerChoice = "paper";
    } else if (rndInt === 2) {
        computerChoice = "scissors";
    } else {
        computerChoice = "something went wrong";
    }
    play = round(userChoice, computerChoice);
    scores();
    scoreboard();
});

function scoreboard() { 
    pSelect.innerHTML = "You have selected " + userChoice + "...";
    cSelect.innerHTML = "The computer has selected " + computerChoice + ".";
    if (wins < 5||losses < 5) {
        result.innerHTML = play;
    } 
    if (wins === 5) {
        intro.innerHTML = "You won! Play again?";
    } else if (losses === 5) {
        intro.innerHTML = "You lost! Play again?";
    } else {
        intro.innerHTML = "Your move!";
    } 
    score.innerHTML = "Rounds played: " + rounds + "   " + "Wins: " + wins + "   " + "Losses: " + losses;
    if (wins >= 5 || losses >= 5) {
        wins = 0;
        losses = 0;
        rounds = 0;
    }
}

function scores() {
    if (play === "You win!") {
        rounds++;
        wins++;
    } else if (play === "You lose!") {
        rounds++;
        losses++; 
    } else if (play === "Tie game!") {
        rounds++;
    }
}

function round(pSelection, cSelection) {
    if (pSelection === "rock") {
        if (cSelection === "rock") {
            return "Tie game!";
        } else if (cSelection === "paper") {
            return "You lose!";
        } else if (cSelection === "scissors") {
            return "You win!";
        } 
    } else if (pSelection === "paper") {
        if (cSelection === "rock") {
            return "You win!";
        } else if (cSelection === "paper") {
            return "Tie game!";
        } else if (cSelection === "scissors") {
            return "You lose!";
        } 
    } else if (pSelection === "scissors") {
        if (cSelection === "rock") {
            return "You lose!";
        } else if (cSelection === "paper") {
            return "You win!";
        } else if (cSelection === "scissors") {
            return "Tie game!";
        }    
        } else { 
            return "Please input a valid option.";
    }
}



















