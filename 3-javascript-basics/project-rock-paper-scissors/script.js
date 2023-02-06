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
    alert('Let\'s play rock, paper scissors!');
    let playerChoice = getPlayerChoice();
    alert(`You selected ${playerChoice}`);
    alert('Now the computer is going to select a choice..');
    let computerChoice = getComputerChoice();
    alert(`The computer selected ${computerChoice}`);


    if(playerChoice == computerChoice){
        playerWin = 'Tied!';
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
        playerWin = playerWin ? 'Won!' : 'Lost!';
    }

    alert(`You ${playerWin}`);
}