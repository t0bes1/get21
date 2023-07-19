
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
 * player cards
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

function houseCards() {
    let num4 = Math.floor(Math.random() * 10) + 1;
    let num5 = Math.floor(Math.random() * 10) + 1;

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
    checkGameResult(houseScore);
}

function hitCard() {
    let playercard3 = cards[Math.floor(Math.random() * 52)];
    document.getElementById('player-card-3').textContent = playercard3.rank;
    hitButton.style.visibility = "hidden";
    standButton.style.visibility = "hidden";
    calculatePlayerTotal(playercard3);
}

function calculatePlayerTotal(playercard3) {
    let finalPlayerScore = parseInt(document.getElementById('player-score').textContent) + playercard3.value;
    console.log(finalPlayerScore);
    document.getElementById('player-score').textContent = finalPlayerScore;
    checkPlayerTotal(finalPlayerScore);
}

function checkPlayerTotal(finalPlayerScore) {
    if (finalPlayerScore > 21) {
        document.getElementById('result-box').textContent = "Bust! You Lose!";
        resetButton.style.visibility = "visible";
        reduceScore();
    } else {
        houseCards();
    }
}

function checkGameResult(houseScore) {
    let playerResult = parseInt(document.getElementById('player-score').innerText);
    if (playerResult > houseScore) {
        document.getElementById('result-box').textContent = "Win";
        resetButton.style.visibility = "visible";
        growScore();
    }
    else {
        document.getElementById('result-box').textContent = "Lose";
        resetButton.style.visibility = "visible";
        reduceScore();
    }
}

/**
 * increment scores up (grow) or down (reduce) depending on win or lose/bust
 */

function growScore() {
    let oldScore = parseInt(document.getElementById("score-box").innerText);
    document.getElementById("score-box").innerText = ++oldScore;
}

function reduceScore() {
    let oldScore = parseInt(document.getElementById("score-box").innerText);
    document.getElementById("score-box").innerText = oldScore - 1;
}

/**
 * return game to initial state for user to play again
 */

function resetGame() {
    dealButton.style.visibility = "visible";
    resetButton.style.visibility = "hidden";
    document.getElementById('house-card-1').textContent = "";
    document.getElementById('house-card-2').textContent = "";
    document.getElementById('house-score').textContent = 0;
    document.getElementById('player-card-1').textContent = "";
    document.getElementById('player-card-2').textContent = "";
    document.getElementById('player-card-3').textContent = "";
    document.getElementById('player-score').textContent = 0;
    document.getElementById('result-box').textContent = "";
}