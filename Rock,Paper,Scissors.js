function getComputerChoice()
{
    let values = ["Rock", "Paper", "Scissors"]
    return Math.floor(Math.random() * values.length)
}

function playSelection(selection)
{
    selection = selection.toString().toLowerCase()
    let values = 0
    if (selection === "rock")
        values = 1
    else if (selection === "paper")
        values = 2
    else if (selection === "scissors")
        values = 3
    console.log(selection);
    console.log(values);
    return values
}

function decideWinner(winsPlayer, winsComputer)
{
    if (winsPlayer > winsComputer)
        return ["Player wins with: ", winsPlayer]
    else
        return ["Computer wins with: ", winsComputer]
}

function game()
{
    let winsPlayer = 0;
    let winsComputer = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("What is your choice ?")
        let player = playSelection(playerChoice)
        let computer = getComputerChoice()
        if (player > computer)
            winsPlayer++;
        else
            winsComputer++;
    }
    return decideWinner(winsPlayer, winsComputer);
}



console.log(game())