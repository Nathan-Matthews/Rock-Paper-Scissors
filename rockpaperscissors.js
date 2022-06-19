let playerScore = 0;
let computerScore = 0;
let tieRound = false;

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

    console.log('You chose: ' + playerSelectionCase + '\nThe computer chose: ' + computerSelection);
    if(playerSelectionCase == computerSelection){
        tieRound = true;
        return "It's a tie! Prepare for another round...";
    }

    // All cases where the player loses.
    if((playerSelectionCase == 'ROCK' && computerSelection == 'PAPER') ||
    (playerSelectionCase == 'PAPER' && computerSelection == 'SCISSORS') ||
    (playerSelectionCase == 'SCISSORS' && computerSelection == 'ROCK') ){
        computerScore++;
        return "You lose. Better luck next round...";

    }

    // All cases where the player wins.
    if((playerSelectionCase == 'ROCK' && computerSelection == 'SCISSORS') ||
    (playerSelectionCase == 'PAPER' && computerSelection == 'ROCK') ||
    (playerSelectionCase == 'SCISSORS' && computerSelection == 'PAPER') ){
        playerScore++;
        return "You Win! Don't let your guard down...";


    }
    return "Hmmm.. Something went very wrong here.....";
}
function game(){
    let playerChoice;
    let finalStatement = 'ERROR';

    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Please enter your choice: 'Rock', 'Paper', or 'Scissors'")
        console.log(playRound(playerChoice, computerPlay()));
        if(computerScore >= 3){
            finalStatement = "The computer has bested you. Git gud..."
        }
        if(playerScore >= 3){
            finalStatement = "Huzzah! You've defeated the computer!"
        }
        // If there is a tie, another round needs to be played.
        if(tieRound == true){
            tieRound = false;
            i--;
        }
    }   
    computerScore = 0;
    playerScore = 0;
    return finalStatement;
}
