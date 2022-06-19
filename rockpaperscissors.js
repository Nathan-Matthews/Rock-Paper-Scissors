function computerPlay(){

    // Returns a random value as 0, 1, or 2
    let randomValue = Math.floor(Math.random() * 3);

    if(randomValue == 0){
        return 'ROCK';
    }
    else if(randomValue == 1){
        return 'PAPER';
    }
    return 'SCISSORS';
}
function playRound(playerSelection, computerSelection){

    let playerSelectionCase = playerSelection.toUpperCase();

    if(playerSelectionCase == computerSelection){
        return "It's a tie! Prepare for another round...";
    }

    // All cases where the player loses.
    if((playerSelectionCase == 'ROCK' && computerSelection == 'PAPER') ||
    (playerSelectionCase == 'PAPER' && computerSelection == 'SCISSORS') ||
    (playerSelectionCase == 'SCISSORS' && computerSelection == 'ROCK') ){
        return "You lose. Better luck next round...";

    }

    // All cases where the player wins.
    if((playerSelectionCase == 'ROCK' && computerSelection == 'SCISSORS') ||
    (playerSelectionCase == 'PAPER' && computerSelection == 'ROCK') ||
    (playerSelectionCase == 'SCISSORS' && computerSelection == 'PAPER') ){
        return "You Win! Don't let your guard down...";

    }
    return "Hmmm.. Something went very wrong here.....";

}
function game(){
    let playerChoice;
    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Please enter your choice: 'Rock', 'Paper', or 'Scissors'")
        console.log(playRound(playerChoice, computerPlay()));
    }
}
