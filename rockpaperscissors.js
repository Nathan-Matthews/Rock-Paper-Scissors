let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playRound(button.innerText,computerPlay());
    });
});

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
        const container = document.querySelector('#message-container');
        container.textContent = "It's a tie! Prepare for another round...";
        container.style.color = 'black';
    }
    // All cases where the player loses.
    if((playerSelectionCase == 'ROCK' && computerSelection == 'PAPER') ||
    (playerSelectionCase == 'PAPER' && computerSelection == 'SCISSORS') ||
    (playerSelectionCase == 'SCISSORS' && computerSelection == 'ROCK') ){
        computerScore++;
        const container = document.querySelector('#message-container');
        container.textContent = 'You lose. Better luck next round...';
        container.style.color = 'red';
        const score = document.querySelector('.computer');
        score.textContent = computerScore;

    }

    // All cases where the player wins.
    if((playerSelectionCase == 'ROCK' && computerSelection == 'SCISSORS') ||
    (playerSelectionCase == 'PAPER' && computerSelection == 'ROCK') ||
    (playerSelectionCase == 'SCISSORS' && computerSelection == 'PAPER') ){
        playerScore++;
        const container = document.querySelector('#message-container');
        container.textContent = "You Win! Don't let your guard down...";
        container.style.color = 'green';
        const score = document.querySelector('.player');
        score.textContent = playerScore;
    }

    if(computerScore >= 5){
        const container = document.querySelector('#final-message');
        container.textContent = 'The computer has bested you. Git gud...';
        container.style.color = 'red';
        const score = document.querySelector('.computer');
        score.style.color = 'red';
    }
    if(playerScore >= 5){
        const container = document.querySelector('#final-message');
        container.textContent = "Huzzah! You've defeated the computer!";
        container.style.color = 'green';
        const score = document.querySelector('.player');
        score.style.color = 'green';
    }
    return;
}

