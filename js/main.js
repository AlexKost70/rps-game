function computerPlay() {
    const computerSelection = getRandomInt(3);
    switch (computerSelection) {
        case 0:
            return 'камень';
        case 1:
            return 'ножницы';
        case 2:
            return 'бумага';
    }
}

function playerPlay() {
    do {
        let playerSelection = prompt('Камень, ножницы или бумага?');
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == 'камень' || playerSelection == 'ножницы' || playerSelection == 'бумага') {
            return playerSelection;
        }
    } while (true);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Ничья!'
    } else {
        if (
        (playerSelection == 'камень' && computerSelection == 'ножницы') ||
        (playerSelection == 'ножницы' && computerSelection == 'бумага') ||
        (playerSelection == 'бумага' && computerSelection == 'камень')
        ) {
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
            return `Вы победили! ${playerSelection} бьет ${computerSelection}.`;
        } else {
            computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            return `Вы проиграли! ${computerSelection} бьет ${playerSelection}.`;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let gameRound = 1; gameRound <= 5; gameRound++) {
        let  result = playRound(playerPlay(), computerPlay());
        console.log(result);
        if (result == 'Ничья!') {
            playerScore++;
            computerScore++;
        } else {
            if (result.substring(3, 7) == 'поб') {
                playerScore++;
            } else {
                computerScore++;
            }
        }
        console.log(`Компьютер: ${computerScore}, игрок: ${playerScore}`);
    }
    if (computerScore == playerScore) {
        console.log('Ничья. Победила дружба!');
    } else {
        if (computerScore > playerScore) {
            console.log('К сожалению, вы проиграли!');
        } else {
            console.log('Поздравляем, вы победили!');
        }
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

game();