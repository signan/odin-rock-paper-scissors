function computerPlay() {
    let choicesAvailable = ['rock', 'paper', 'scissors'];
    let randomChoice = choicesAvailable[Math.floor(Math.random() * choicesAvailable.length)];
    return randomChoice;
}

function roundOfRPS() {
    let computerSelection = computerPlay();
    let playerSelection = window.prompt("enter a choice").toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);

    // if equal "tie"
    if (computerSelection === playerSelection) {
        console.log("It's a tie");
    }
    else if ((computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper") ||
            (computerSelection === "rock" && playerSelection === "scissors")) {
        console.log("Computer wins!!!");
    }
    else if ((computerSelection === "scissors" && playerSelection === "rock") ||
            (computerSelection === "rock" && playerSelection === "paper") ||
            (computerSelection === "paper" && playerSelection === "scissors")) {
        console.log("Player wins!!!");
        }
    else {
        console.log("not a choice");
    }
}
