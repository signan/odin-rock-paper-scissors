function computerPlay() {
    let choicesAvailable = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choicesAvailable[Math.floor(Math.random() * 3)];
    return randomChoice
}