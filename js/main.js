'use strict';

let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

const gameField = document.getElementById('game');
const score = document.getElementById('score');
const buttons = document.getElementById('buttons');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const computerScoreSpan = document.getElementById('computer-score');
const playerScoreSpan = document.getElementById('player-score');
const message = document.getElementById('message');
const nextButton = document.getElementById('next-btn');

rock.addEventListener('click', function () {
    startRound('камень');
});
scissors.addEventListener('click', function () {
    startRound('ножницы');
});
paper.addEventListener('click', function () {
    startRound('бумага');
});
nextButton.addEventListener('click', function () {
    if (gameRound < 5) {
        showButtons();
    } else {
        showButtons();
        buttons.classList.add('hidden');
    }
});



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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function showButtons() {
    score.classList.remove('hidden');
    buttons.classList.remove('hidden');
    message.classList.add('hidden');
    nextButton.classList.add('hidden');

}

function hideButtons() {
    score.classList.add('hidden');
    buttons.classList.add('hidden');
    message.classList.remove('hidden');
    nextButton.classList.remove('hidden');
}

function checkResult(result) {
    if (result == 'Ничья!') {
        playerScore++;
        computerScore++;
    } else {
        if (result.substring(3, 6) == 'поб') {
            playerScore++;
        } else {
            computerScore++;
        }
    }
}

function startRound(playerSelection) {
    let result = playRound(playerSelection, computerPlay());
    hideButtons();
    checkResult(result);
    computerScoreSpan.innerText = computerScore;
    playerScoreSpan.innerText = playerScore;
    message.innerHTML = result;
    gameRound++;
}




