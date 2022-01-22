function computerPlay() {
    let choicesAvailable = ['rock', 'paper', 'scissors'];
    let randomChoice = choicesAvailable[Math.floor(Math.random() * choicesAvailable.length)];
    return randomChoice;
}




