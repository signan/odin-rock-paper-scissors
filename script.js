function computerPlay() {
    let choicesAvailable = ['rock', 'paper', 'scissors'];
    let randomChoice = choicesAvailable[Math.floor(Math.random() * choicesAvailable.length)];
    return randomChoice;
}

function playRound(computerSelection, playerSelection) {
    //a tie
    if (computerSelection === playerSelection) {
        return 0;
    }
    //pc wins
    else if ((computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper") ||
            (computerSelection === "rock" && playerSelection === "scissors")) {
        return 1;
    }
    //player wins
    else if ((computerSelection === "scissors" && playerSelection === "rock") ||
            (computerSelection === "rock" && playerSelection === "paper") ||
            (computerSelection === "paper" && playerSelection === "scissors")) {
        return 2;
        }
    //note a valid choice
    else {
        return -1;
    }
}

function declareWinner(computerScore, playerScore) {
    if (computerScore > playerScore) {
        return "Computer wins with score of " + computerScore + " against " + playerScore;
    }
    else {
        return "Player wins with score of " + playerScore + " against " + computerScore;
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i=1; i <= 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = window.prompt("enter a choice").toLowerCase();
        let roundResult = playRound(computerSelection, playerSelection)
        console.log("roundResult " + roundResult);
        switch (roundResult) {
            case 0:
                console.log("It's a tie. both are " + playerSelection);
                i--;
                break;
            case 1:
                console.log("PC Wins!!! with " + computerSelection + " against " + playerSelection);
                computerScore++;
                break;
            case 2:
                console.log("Player Wins!!! with " + playerSelection + " against " + computerSelection);
                playerScore++;
                break;
            case -1:
                console.log(playerSelection + " is not a valid choice. play again.");
                i--;
                break;
        }

        console.log("round " + i + "\npc: " + computerScore + "\nplayer: " + playerScore);
    }
    console.log(declareWinner(computerScore, playerScore));
}


game();