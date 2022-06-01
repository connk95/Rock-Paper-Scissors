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

    console.log(computerPlay());

    

    




