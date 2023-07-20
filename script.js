
/**
 * declarations & event listeners
 */

let dealButton = document.getElementById('deal-button');
dealButton.addEventListener("click", function () {
    playerCards();
});

let standButton = document.getElementById('stand-button');
standButton.addEventListener("click", function () {
    houseCards();
});

let hitButton = document.getElementById('hit-button');
hitButton.addEventListener("click", function () {
    hitCard();
});

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener("click", function () {
    resetGame();
});

const dialog = document.querySelector("dialog");
let infoButton = document.getElementById('info-modal');
infoButton.addEventListener("click", function () {
    dialog.showModal();
});

/**
 * cards variable with all 52 possible cards, each with a value for the game
 */

const cards = [
    { 'rank': 'Ace of hearts', 'value': 11 },
    { 'rank': 'Two of hearts', 'value': 2 },
    { 'rank': 'Three of hearts', 'value': 3 },
    { 'rank': 'Four of hearts', 'value': 4 },
    { 'rank': 'Five of hearts', 'value': 5 },
    { 'rank': 'Six of hearts', 'value': 6 },
    { 'rank': 'Seven of hearts', 'value': 7 },
    { 'rank': 'Eight of hearts', 'value': 8 },
    { 'rank': 'Nine of hearts', 'value': 9 },
    { 'rank': 'Ten of hearts', 'value': 10 },
    { 'rank': 'Jack of hearts', 'value': 10 },
    { 'rank': 'Queen of hearts', 'value': 10 },
    { 'rank': 'King of hearts', 'value': 10 },
    { 'rank': 'Ace of clubs', 'value': 11 },
    { 'rank': 'Two of clubs', 'value': 2 },
    { 'rank': 'Three of clubs', 'value': 3 },
    { 'rank': 'Four of clubs', 'value': 4 },
    { 'rank': 'Five of clubs', 'value': 5 },
    { 'rank': 'Six of clubs', 'value': 6 },
    { 'rank': 'Seven of clubs', 'value': 7 },
    { 'rank': 'Eight of clubs', 'value': 8 },
    { 'rank': 'Nine of clubs', 'value': 9 },
    { 'rank': 'Ten of clubs', 'value': 10 },
    { 'rank': 'Jack of clubs', 'value': 10 },
    { 'rank': 'Queen of clubs', 'value': 10 },
    { 'rank': 'King of clubs', 'value': 10 },
    { 'rank': 'Ace of diamonds', 'value': 11 },
    { 'rank': 'Two of diamonds', 'value': 2 },
    { 'rank': 'Three of diamonds', 'value': 3 },
    { 'rank': 'Four of diamonds', 'value': 4 },
    { 'rank': 'Five of diamonds', 'value': 5 },
    { 'rank': 'Six of diamonds', 'value': 6 },
    { 'rank': 'Seven of diamonds', 'value': 7 },
    { 'rank': 'Eight of diamonds', 'value': 8 },
    { 'rank': 'Nine of diamonds', 'value': 9 },
    { 'rank': 'Ten of diamonds', 'value': 10 },
    { 'rank': 'Jack of diamonds', 'value': 10 },
    { 'rank': 'Queen of diamonds', 'value': 10 },
    { 'rank': 'King of diamonds', 'value': 10 },
    { 'rank': 'Ace of spades', 'value': 11 },
    { 'rank': 'Two of spades', 'value': 2 },
    { 'rank': 'Three of spades', 'value': 3 },
    { 'rank': 'Four of spades', 'value': 4 },
    { 'rank': 'Five of spades', 'value': 5 },
    { 'rank': 'Six of spades', 'value': 6 },
    { 'rank': 'Seven of spades', 'value': 7 },
    { 'rank': 'Eight of spades', 'value': 8 },
    { 'rank': 'Nine of spades', 'value': 9 },
    { 'rank': 'Ten of spades', 'value': 10 },
    { 'rank': 'Jack of spades', 'value': 10 },
    { 'rank': 'Queen of spades', 'value': 10 },
    { 'rank': 'King of spades', 'value': 10 },
];

/**
 * modal
 */

dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close();
    }
});

/**
 * game starts with player receiving two cards
 */

function playerCards() {
    let num1 = Math.floor(Math.random() * 52) + 1;
    let num2 = Math.floor(Math.random() * 52) + 1;

    displayPlayerCards(num1, num2);
    dealButton.style.visibility = "hidden";
    hitButton.style.visibility = "visible";
    standButton.style.visibility = "visible";
}

function displayPlayerCards(operand1, operand2) {
    let playerCard1 = cards[operand1 - 1];
    let playerCard2 = cards[operand2 - 1];
    document.getElementById('player-card-1').textContent = playerCard1.rank;
    document.getElementById('player-card-2').textContent = playerCard2.rank;
    document.getElementById('player-score').textContent = playerCard1.value + playerCard2.value;
}

/**
 * house cards phase; house receives two cards
 */

function houseCards() {
    let num4 = Math.floor(Math.random() * 52) + 1;
    let num5 = Math.floor(Math.random() * 52) + 1;

    displayHouseCards(num4, num5);

    hitButton.style.visibility = "hidden";
    standButton.style.visibility = "hidden";
}

function displayHouseCards(operand1, operand2) {
    let houseCard1 = cards[operand1 - 1];
    let houseCard2 = cards[operand2 - 1];
    let houseScore = houseCard1.value + houseCard2.value;
    document.getElementById('house-card-1').textContent = houseCard1.rank;
    document.getElementById('house-card-2').textContent = houseCard2.rank;
    document.getElementById('house-score').textContent = houseScore;
    hitHouseCard(houseScore);
}

/**
 * checks whether the house needs a third card, if it's total initla score is less than 11
 */

function hitHouseCard(houseScore) {
    if (houseScore > 11) { checkGameResult(); }
    else {
        let num6 = Math.floor(Math.random() * 52) + 1;
        let houseCard3 = cards[num6 - 1];
        document.getElementById('house-card-3').textContent = houseCard3.rank;
        let newHouseScore = houseScore + houseCard3.value;
        document.getElementById('house-score').textContent = newHouseScore;
        checkGameResult();
    }

}

/**
 * player gets an extra card if choosing hit
 */

function hitCard() {
    let playercard3 = cards[Math.floor(Math.random() * 52)];
    document.getElementById('player-card-3').textContent = playercard3.rank;
    hitButton.style.visibility = "hidden";
    standButton.style.visibility = "hidden";
    calculatePlayerTotal(playercard3);
}

/**
 * new player total is calculated including hit card
 */

function calculatePlayerTotal(playercard3) {
    let finalPlayerScore = parseInt(document.getElementById('player-score').textContent) + playercard3.value;
    console.log(finalPlayerScore);
    document.getElementById('player-score').textContent = finalPlayerScore;
    checkPlayerTotal(finalPlayerScore);
}

/**
 * player total is checked whether they are bust. If so, end game. If not, game continues.
 */

function checkPlayerTotal(finalPlayerScore) {
    if (finalPlayerScore > 21) {
        document.getElementById('result-box').textContent = `You're Bust! ${finalPlayerScore} is over 21 ... You Lose!`;
        resetButton.style.visibility = "visible";
        reduceScore();
    } else {
        houseCards();
    }
}

/**
 * player total is compared to house total and game result is evaluated.
 */

function checkGameResult() {
    let playerResult = parseInt(document.getElementById('player-score').innerText);
    let houseResult = parseInt(document.getElementById('house-score').innerText);
    if (playerResult > houseResult) {
        document.getElementById('result-box').textContent = `Win :) ... ${playerResult} beats ${houseResult}`;
        resetButton.style.visibility = "visible";
        growScore();
    }
    else {
        document.getElementById('result-box').textContent = `Lose :( ... ${houseResult} beats ${playerResult}`;
        resetButton.style.visibility = "visible";
        reduceScore();
    }
}

/**
 * increment scores up (grow) or down (reduce) depending on win or lose/bust
 */

function growScore() {
    let oldScore = parseInt(document.getElementById("score-box").innerText);
    let newScore = oldScore + 3;
    document.getElementById("score-box").innerText = newScore;
    checkTotal(newScore);
}

function reduceScore() {
    let oldScore = parseInt(document.getElementById("score-box").innerText);
    document.getElementById("score-box").innerText = oldScore - 1;
}

/**
 * checks whether player has reached 10 points and won the game
 */

function checkTotal(newScore) {
    if (newScore > 9) {
        document.getElementById('result-box').textContent = "You've done it, 10 points!";
        resetButton.style.visibility = "visible";
        document.getElementById('score-box').style.visibility = "hidden";
        document.getElementById('score-box').textContent = 0;
    }
    else (console.log("live"));
}

/**
 * return game to initial state for user to play again
 */

function resetGame() {
    dealButton.style.visibility = "visible";
    resetButton.style.visibility = "hidden";
    document.getElementById('house-card-1').textContent = "";
    document.getElementById('house-card-2').textContent = "";
    document.getElementById('house-card-3').textContent = "";
    document.getElementById('house-score').textContent = 0;
    document.getElementById('player-card-1').textContent = "";
    document.getElementById('player-card-2').textContent = "";
    document.getElementById('player-card-3').textContent = "";
    document.getElementById('player-score').textContent = 0;
    document.getElementById('result-box').textContent = "";
    document.getElementById('score-box').style.visibility = "visible";
}