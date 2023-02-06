function randomNumber(){
    let random = Math.floor(Math.random()*3)+1;
    console.log(random);
    return random;
};

function getComputerChoice(){
    //1 = rock
    //2 = paper
    //3 = scissors
    let choice;
    switch (randomNumber()){
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors';
            break;
        default:
            throw "Computer picked a choice that was not rock/paper/scissors???";
    }
        return choice;
}

function getPlayerChoice(){
    let playerChoice;
    do{
        playerChoice = prompt('Select \'rock\', \'paper\', or \'scissors\'');
    } while(playerChoice.toLowerCase() != 'rock' && playerChoice.toLowerCase() != 'scissors' && playerChoice.toLowerCase() != 'paper');
    return playerChoice;
}

function playGame(){
    //alert('Let\'s play rock, paper scissors!');
    let playerChoice = getPlayerChoice();
    alert(`You selected ${playerChoice}`);
    alert('Now the computer is going to select a choice..');
    let computerChoice = getComputerChoice();
    alert(`The computer selected ${computerChoice}`);

    let result;

    if(playerChoice == computerChoice){
        playerWin = 'Tied!';
        result = 0;
    } else {
        switch (computerChoice){
            case 'rock':
                playerWin = playerChoice == 'paper';
                break;
            case 'paper':
                playerWin = playerChoice == 'scissors';
                break;
            case 'scissors':
                playerWin = playerChoice == 'rock';
                break;
            default:
                break;
        }
        result = playerWin? 1 : -1;
        playerWin = playerWin ? 'Won!' : 'Lost!';
    }

    alert(`You ${playerWin}`);
    return result;
}

function playGameBestOf(rounds){
    alert(`Let\'s play rock, paper scissors! This will be a game to see the best of ${rounds}`);
    let playerScore = 0;
    let computerScore =0;

    let winner;
    for(let current = 1; current <= rounds; current++){
        alert(`Round ${current}`);

        winner = playGame();

        switch(winner){
            case -1:
                computerScore++
                break;
            case 1:
                playerScore++;
                break;
            default:
                break;
        }

        if(playerScore > Math.floor(rounds/2) || computerScore > Math.floor(rounds/2)) break;
    }

    if(playerScore > computerScore){
        winner = "the Player";
    } else if (computerScore > playerScore){
        winner = "the Computer";
    } else {
        winner = "no one (it was a draw)";
    }

    alert(`The overwall winner was.. ${winner}!`)
}