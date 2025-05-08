function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
    
};

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice: ");
    return (humanChoice);
   

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let lowerHumanChoice = humanChoice.toLowerCase();
    let lowerComputerChoice = computerChoice.toLowerCase();

    if (lowerHumanChoice == "rock" && lowerComputerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;

    }else if(lowerHumanChoice == "rock" && lowerComputerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore += 1;

    } else if(lowerHumanChoice == "paper" && lowerComputerChoice == "scissors") {
        console.log("You lose! Scissors beat Paper");
        computerScore += 1;

    } else if (lowerHumanChoice == "paper" && lowerComputerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore += 1;

    } else if(lowerHumanChoice == "scissors" && lowerComputerChoice == "paper"){
        console.log("You win! Scissors beats Paper");
        humanScore += 1;

    } else if(lowerHumanChoice == "scissors" && lowerComputerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    } else {
        console.log("It's a tie");
    }

}

function playGame() {

    for(let round = 1; round < 6; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
    
        playRound(humanChoice, computerChoice);

    }
    
    if(humanScore > computerScore) {
        console.log("Hurray! You Won");
    } else if(humanScore < computerScore) {
        console.log("Oops! You lose try again");
    } else {
        console.log("It's a tie, try again");
    }
    
}

playGame();

