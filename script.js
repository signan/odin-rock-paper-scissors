function computerPlay() {
    let choicesAvailable = ['rock', 'paper', 'scissors'];
    let randomChoice = choicesAvailable[Math.floor(Math.random() * choicesAvailable.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "It's a tie";
    }
    else if ((computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper") ||
            (computerSelection === "rock" && playerSelection === "scissors")) {
        return "Computer wins!!!";
    }
    else if ((computerSelection === "scissors" && playerSelection === "rock") ||
            (computerSelection === "rock" && playerSelection === "paper") ||
            (computerSelection === "paper" && playerSelection === "scissors")) {
        return "Player wins!!!";
        }
    else {
        return "not a choice";
    }
}


let computerSelection = computerPlay();
let playerSelection = window.prompt("enter a choice").toLowerCase();

console.log(playRound(computerSelection, playerSelection))