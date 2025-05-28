const roundResult = document.querySelector("div");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const pHumanChoice = document.createElement("p");
const pComputerChoice = document.createElement("p");
const pWinner = document.createElement("p");
const runningScore = document.createElement("p")


function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }
    
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let lowerHumanChoice = humanChoice.toLowerCase();
    let lowerComputerChoice = computerChoice.toLowerCase();

    pHumanChoice.textContent = `You: ${lowerHumanChoice} ${humanScore}`;
    pComputerChoice.textContent = `Computer: ${lowerComputerChoice} ${computerScore}`;

    if (lowerHumanChoice === "rock" && lowerComputerChoice === "paper") {
        pWinner.textContent = "You lose! Paper beats Rock";
        
        computerScore += 1;

    }else if(lowerHumanChoice === "rock" && lowerComputerChoice === "scissor") {
        pWinner.textContent = "You win! Rock beats Scissors";
        
        humanScore += 1;

    } else if(lowerHumanChoice === "paper" && lowerComputerChoice === "scissor") {
        pWinner.textContent = "You lose! Scissors beat Paper";

        computerScore += 1;

    } else if (lowerHumanChoice === "paper" && lowerComputerChoice === "rock") {
        pWinner.textContent = "You win! Paper beats Rock";
        
        humanScore += 1;

    } else if(lowerHumanChoice === "scissor" && lowerComputerChoice === "paper"){
        pWinner.textContent = "You win! Scissors beats Paper";

        humanScore += 1;

    } else if(lowerHumanChoice === "scissor" && lowerComputerChoice === "rock") {
        pWinner.textContent = "You lose! Rock beats Scissors";

        computerScore += 1;

    } else if(lowerComputerChoice === lowerComputerChoice) {
        pWinner.textContent = "It's a tie";
    }

    roundResult.appendChild(pHumanChoice);
    roundResult.appendChild(pComputerChoice);
    roundResult.appendChild(pWinner);

    function scoreView(humanScore, computerScore) {
        if(humanScore == 5){
            alert(humanScore);
            if(humanScore > computerScore) {
                runningScore.textContent = `Hurray! You Won ${computerScore} to ${humanScore}`;
            } else if(humanScore < computerScore) {
                runningScore.textContent = `Oops! You lose try again ${computerScore} to ${humanScore}`;
            } else {
                runningScore.textContent = `It's a tie, try again ${computerScore} to ${humanScore}`;
            }
    
            roundResult.appendChild(runningScore);
            pHumanChoice.textContent = "";
            pComputerChoice.textContent = "";
            pWinner.textContent = "";
       }  
    }


    scoreView(humanScore, computerScore);
}

rock.addEventListener("click", () => {
    playRound(rock.textContent, getComputerChoice());
});
paper.addEventListener("click", () => {
    playRound(paper.textContent, getComputerChoice());
});
scissor.addEventListener("click", () => {
    playRound(scissor.textContent, getComputerChoice());
});


