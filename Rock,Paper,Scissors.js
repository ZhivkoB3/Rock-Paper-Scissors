let aDiv = document.createElement('div');
aDiv.classList.add('results');
aDiv.setAttribute('id', 'results')
aDiv.style.display = 'flex';
aDiv.style.width = "100%";
aDiv.style.height = "300px";

let resultHeader = document.createElement('h1');
resultHeader.setAttribute('id', 'result-header')
resultHeader.textContent = ('Results');
resultHeader.style.width = '50%';
resultHeader.style.textAlign = "center"

aDiv.appendChild(resultHeader)

const choiceHeader = document.createElement('h1');
choiceHeader.setAttribute('id', 'choice-header')
choiceHeader.textContent = ("Choices");
choiceHeader.style.width = '50%';
choiceHeader.style.textAlign = "center"

aDiv.appendChild(choiceHeader);
document.body.appendChild(aDiv);

let computerScore = 0;
let playerScore = 0;

function resultTracker(computer, player)
{
    let textResultContent = document.createElement('p');

    if(computer === player){
        textResultContent.textContent = "Tie"
    }
    else if(player === 'rock'){
        if (computer === 'paper'){
            computerScore++;
            textResultContent.textContent = ('Computer Won: ' + computerScore.toString());
        }
        else{
            playerScore++;
            textResultContent.textContent = ("Player won: " + playerScore.toString())
        }
    }
    else if(player === 'scissors'){
        if(computer==='rock'){
            computerScore++;
            textResultContent.textContent = ('Computer Won: ' + computerScore.toString());
        }
        else{
            playerScore++;
            textResultContent.textContent = ("Player won: " + playerScore.toString())
        }
    }
    else if(player === 'paper'){
        if(computer === 'scissors'){
            computerScore++;
            textResultContent.textContent = ('Computer Won: ' + computerScore.toString());
        }
        else {
            playerScore++;
            textResultContent.textContent = ("Player won: " + playerScore.toString())
        }
    }
    resultHeader.appendChild(textResultContent);
}

function getComputerChoice()
{
    let textComputerChoice = document.createElement('p')
    let currVal;

    let values = ["Rock", "Paper", "Scissors"]
    let computerChoice = Math.floor(Math.random() * values.length)

    if (computerChoice === 1)
        {currVal = 'rock'
        textComputerChoice.textContent = "Computer choice: Rock";}
    else if (computerChoice === 2)
        {currVal = 'paper'
        textComputerChoice.textContent = "Computer choice: Paper";}
    else
        {currVal = 'scissors'
        textComputerChoice.textContent = "Computer choice: Scissors";}
    choiceHeader.appendChild(textComputerChoice)
    return currVal
}

function getPlayerChoice(playerChoice) {
    let textPlayerChoice = document.createElement('p')
    if (playerChoice === 'rock')
        textPlayerChoice.textContent = "Player choice: Rock";
    else if (playerChoice === 'paper')
        textPlayerChoice.textContent = "Player choice: Paper";
    else
        textPlayerChoice.textContent = "Player choice: Scissors";
    choiceHeader.appendChild(textPlayerChoice)
    return playerChoice;
}

function reloadGame() {
    let btn = document.createElement('button');
    btn.innerText = 'Restart';
    aDiv.appendChild(btn);
    btn.style.position = 'absolute';
    btn.style.margin = '50px 45%';
    btn.style.padding = '15px 64px';
    // btn.

    btn.addEventListener('click', () => {
        window.location.reload();
    })
}

function GameOver() {
    let gameOverText = document.createElement('p');
    gameOverText.style.fontSize = '2rem';
    gameOverText.style.textAlign = 'center';
    gameOverText.style.fontWeight = 'bold';
    gameOverText.style.margin = '0 auto';

    if (playerScore === 3)
        {document.getElementById('result-header').remove();
        document.getElementById('choice-header').remove();
        gameOverText.textContent = 'Player won !';
        aDiv.appendChild(gameOverText);
        reloadGame();}

    else if (computerScore === 3)
        {document.getElementById('result-header').remove();
        document.getElementById('choice-header').remove();
        gameOverText.textContent = 'Computer won !';
        aDiv.appendChild(gameOverText);
        reloadGame();}
}

const myButtons = document.querySelectorAll('button');

myButtons.forEach(key => key.addEventListener(
    'click', function(){

        let playerChoice = getPlayerChoice(key.id);
        let computerChoice = getComputerChoice()

        resultTracker(computerChoice, playerChoice)
        GameOver();
    }));

