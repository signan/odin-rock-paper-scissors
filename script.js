const resultDiv = document.getElementById('result');
const h3 = document.createElement('h3');
resultDiv.appendChild(h3);
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let scoreMessage = '';


function computerSelect() {
    let choicesAvailable = ['rock', 'paper', 'scissors'];
    let randomChoice = choicesAvailable[Math.floor(Math.random() * choicesAvailable.length)];
    return randomChoice;
}

function playRound(computerSelection, playerSelection) {
    //a tie
    if (computerSelection === playerSelection) {
        return 'Tie';
    }
    //pc wins
    else if ((computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper") ||
            (computerSelection === "rock" && playerSelection === "scissors")) {
        computerScore++;
        return 'Computer';
    }
    //player wins
    else if ((computerSelection === "scissors" && playerSelection === "rock") ||
            (computerSelection === "rock" && playerSelection === "paper") ||
            (computerSelection === "paper" && playerSelection === "scissors")) {
        playerScore++;
        return 'Player';
        }
}

function declareWinner(computerScore, playerScore) {
    if (computerScore > playerScore) {
        h3.textContent = `${h3.textContent} Computer wins!!!!!`;
    }
    else {
        h3.textContent = `${h3.textContent} Player wins!!!!!`;
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    h3.textContent = `${h3.textContent}\nrestarting`;
}

function updateScoreMessage() {
    h3.textContent = `${playerScore}-${computerScore}`;
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

function beginGame(playerSelection) {
    console.log('begin game');
    let computerSelection = computerSelect();
    playerSelection = playerSelection.toLowerCase();
    roundWinner = playRound(computerSelection, playerSelection);
    updateScoreMessage();
    if (isGameOver()) {
        declareWinner();
        restartGame();
    }
}

btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', () => beginGame(btn.textContent)));