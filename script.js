
/**
 * declarations & event listeners
 */

let scoreBox = document.getElementById("chip-box");
let houseScoreBox = document.getElementById('house-score');
let resultBox = document.getElementById('result-box');
let playerScoreBox = document.getElementById('player-score');
let playerBet = document.getElementById('bet-box');

let dealButton = document.getElementById('deal-button');
dealButton.addEventListener("click", function () {
    checkBetSize();
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
    { 'rank': 'Ace of hearts', 'value': 11, 'img': '/assets/images/ace_of_hearts.png', },
    { 'rank': 'Two of hearts', 'value': 2, 'img': '/assets/images/2_of_hearts.png', },
    { 'rank': 'Three of hearts', 'value': 3, 'img': '/assets/images/3_of_hearts.png', },
    { 'rank': 'Four of hearts', 'value': 4, 'img': '/assets/images/4_of_hearts.png', },
    { 'rank': 'Five of hearts', 'value': 5, 'img': '/assets/images/5_of_hearts.png', },
    { 'rank': 'Six of hearts', 'value': 6, 'img': '/assets/images/6_of_hearts.png', },
    { 'rank': 'Seven of hearts', 'value': 7, 'img': '/assets/images/7_of_hearts.png', },
    { 'rank': 'Eight of hearts', 'value': 8, 'img': '/assets/images/8_of_hearts.png', },
    { 'rank': 'Nine of hearts', 'value': 9, 'img': '/assets/images/9_of_hearts.png', },
    { 'rank': 'Ten of hearts', 'value': 10, 'img': '/assets/images/10_of_hearts.png', },
    { 'rank': 'Jack of hearts', 'value': 10, 'img': '/assets/images/jack_of_hearts2.png', },
    { 'rank': 'Queen of hearts', 'value': 10, 'img': '/assets/images/queen_of_hearts2.png', },
    { 'rank': 'King of hearts', 'value': 10, 'img': '/assets/images/king_of_hearts2.png', },
    { 'rank': 'Ace of clubs', 'value': 11, 'img': '/assets/images/ace_of_clubs.png', },
    { 'rank': 'Two of clubs', 'value': 2, 'img': '/assets/images/2_of_clubs.png', },
    { 'rank': 'Three of clubs', 'value': 3, 'img': '/assets/images/3_of_clubs.png', },
    { 'rank': 'Four of clubs', 'value': 4, 'img': '/assets/images/4_of_clubs.png', },
    { 'rank': 'Five of clubs', 'value': 5, 'img': '/assets/images/5_of_clubs.png', },
    { 'rank': 'Six of clubs', 'value': 6, 'img': '/assets/images/6_of_clubs.png', },
    { 'rank': 'Seven of clubs', 'value': 7, 'img': '/assets/images/7_of_clubs.png', },
    { 'rank': 'Eight of clubs', 'value': 8, 'img': '/assets/images/8_of_clubs.png', },
    { 'rank': 'Nine of clubs', 'value': 9, 'img': '/assets/images/9_of_clubs.png', },
    { 'rank': 'Ten of clubs', 'value': 10, 'img': '/assets/images/10_of_clubs.png', },
    { 'rank': 'Jack of clubs', 'value': 10, 'img': '/assets/images/jack_of_clubs2.png', },
    { 'rank': 'Queen of clubs', 'value': 10, 'img': '/assets/images/queen_of_clubs2.png', },
    { 'rank': 'King of clubs', 'value': 10, 'img': '/assets/images/king_of_clubs2.png', },
    { 'rank': 'Ace of diamonds', 'value': 11, 'img': '/assets/images/ace_of_diamonds.png', },
    { 'rank': 'Two of diamonds', 'value': 2, 'img': '/assets/images/2_of_diamonds.png', },
    { 'rank': 'Three of diamonds', 'value': 3, 'img': '/assets/images/3_of_diamonds.png', },
    { 'rank': 'Four of diamonds', 'value': 4, 'img': '/assets/images/4_of_diamonds.png', },
    { 'rank': 'Five of diamonds', 'value': 5, 'img': '/assets/images/5_of_diamonds.png', },
    { 'rank': 'Six of diamonds', 'value': 6, 'img': '/assets/images/6_of_diamonds.png', },
    { 'rank': 'Seven of diamonds', 'value': 7, 'img': '/assets/images/7_of_diamonds.png', },
    { 'rank': 'Eight of diamonds', 'value': 8, 'img': '/assets/images/8_of_diamonds.png', },
    { 'rank': 'Nine of diamonds', 'value': 9, 'img': '/assets/images/9_of_diamonds.png', },
    { 'rank': 'Ten of diamonds', 'value': 10, 'img': '/assets/images/10_of_diamonds.png', },
    { 'rank': 'Jack of diamonds', 'value': 10, 'img': '/assets/images/jack_of_diamonds2.png', },
    { 'rank': 'Queen of diamonds', 'value': 10, 'img': '/assets/images/queen_of_diamonds2.png', },
    { 'rank': 'King of diamonds', 'value': 10, 'img': '/assets/images/king_of_diamonds2.png', },
    { 'rank': 'Ace of spades', 'value': 11, 'img': '/assets/images/ace_of_spades.png', },
    { 'rank': 'Two of spades', 'value': 2, 'img': '/assets/images/2_of_spades.png', },
    { 'rank': 'Three of spades', 'value': 3, 'img': '/assets/images/3_of_spades.png', },
    { 'rank': 'Four of spades', 'value': 4, 'img': '/assets/images/4_of_spades.png', },
    { 'rank': 'Five of spades', 'value': 5, 'img': '/assets/images/5_of_spades.png', },
    { 'rank': 'Six of spades', 'value': 6, 'img': '/assets/images/6_of_spades.png', },
    { 'rank': 'Seven of spades', 'value': 7, 'img': '/assets/images/7_of_spades.png', },
    { 'rank': 'Eight of spades', 'value': 8, 'img': '/assets/images/8_of_spades.png', },
    { 'rank': 'Nine of spades', 'value': 9, 'img': '/assets/images/9_of_spades.png', },
    { 'rank': 'Ten of spades', 'value': 10, 'img': '/assets/images/10_of_spades.png', },
    { 'rank': 'Jack of spades', 'value': 10, 'img': '/assets/images/jack_of_spades2.png', },
    { 'rank': 'Queen of spades', 'value': 10, 'img': '/assets/images/queen_of_spades2.png', },
    { 'rank': 'King of spades', 'value': 10, 'img': '/assets/images/king_of_spades2.png', },
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
 * check bet size is allowable
 */

function checkBetSize() {
    if (parseInt(playerBet.value) > parseInt(scoreBox.innerText)) {
        alert("Too big!");
    }
    else (playerCards());
}


/**
 * game starts with player receiving two cards
 */

function playerCards() {

    let num1 = Math.floor(Math.random() * 52);
    let num2 = Math.floor(Math.random() * 52);

    displayPlayerCards(num1, num2);
    dealButton.style.visibility = "hidden";
    hitButton.style.visibility = "visible";
    standButton.style.visibility = "visible";
}

function displayPlayerCards(operand1, operand2) {
    let playerCard1 = cards[operand1];
    let playerCard2 = cards[operand2];
    document.getElementById('player-card-1-img').src = playerCard1.img;
    document.getElementById('player-card-2-img').src = playerCard2.img;
    playerScoreBox.textContent = playerCard1.value + playerCard2.value;
}

/**
 * house cards phase; house receives two cards
 */

function houseCards() {
    let num4 = Math.floor(Math.random() * 52);
    let num5 = Math.floor(Math.random() * 52);

    displayHouseCards(num4, num5);

    hitButton.style.visibility = "hidden";
    standButton.style.visibility = "hidden";
}

function displayHouseCards(operand1, operand2) {
    let houseCard1 = cards[operand1];
    let houseCard2 = cards[operand2];
    let houseScore = houseCard1.value + houseCard2.value;
    document.getElementById('house-card-1-img').src = houseCard1.img;
    document.getElementById('house-card-2-img').src = houseCard2.img;
    houseScoreBox.textContent = houseScore;
    hitHouseCard(houseScore);
}

/**
 * checks whether the house needs a third card, if it's total initial score is less than 11
 */

function hitHouseCard(houseScore) {
    if (houseScore > 11) { checkGameResult(); }
    else {
        let num6 = Math.floor(Math.random() * 52);
        let houseCard3 = cards[num6];
        document.getElementById('house-card-3-img').src = houseCard3.img;
        let newHouseScore = houseScore + houseCard3.value;
        houseScoreBox.textContent = newHouseScore;
        checkGameResult();
    }

}

/**
 * player gets an extra card if choosing hit
 */

function hitCard() {
    let playerCard3 = cards[Math.floor(Math.random() * 52)];
    document.getElementById('player-card-3-img').src = playerCard3.img;
    hitButton.style.visibility = "hidden";
    standButton.style.visibility = "hidden";
    calculatePlayerTotal(playerCard3);
}

/**
 * new player total is calculated including hit card
 */

function calculatePlayerTotal(playerCard3) {
    let finalPlayerScore = parseInt(playerScoreBox.textContent) + playerCard3.value;
    console.log(finalPlayerScore);
    playerScoreBox.textContent = finalPlayerScore;
    checkPlayerTotal(finalPlayerScore);
}

/**
 * player total is checked whether they are bust. If so, end game. If not, game continues.
 */

function checkPlayerTotal(finalPlayerScore) {
    if (finalPlayerScore > 21) {
        resultBox.textContent = `You're Bust! ${finalPlayerScore} is over 21 ... You Lose!`;
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
    let playerResult = parseInt(playerScoreBox.innerText);
    let houseResult = parseInt(houseScoreBox.innerText);
    if (playerResult > houseResult) {
        resultBox.textContent = `Win :) ... ${playerResult} beats ${houseResult}`;
        resetButton.style.visibility = "visible";
        growScore();
    }
    else {
        resultBox.textContent = `Lose :( ... ${houseResult} beats ${playerResult}`;
        resetButton.style.visibility = "visible";
        reduceScore();
    }
}

/**
 * increment scores up (grow) or down (reduce) depending on win or lose/bust
 */

function growScore() {
    let oldScore = parseInt(scoreBox.innerText);
    let newScore = oldScore + parseInt(playerBet.value);
    scoreBox.innerText = newScore;
    checkTotal(newScore);
    console.log(newScore);
}

function reduceScore() {
    let oldScore = parseInt(scoreBox.innerText);
    let newScore = oldScore - parseInt(playerBet.value);
    scoreBox.innerText = newScore;
    checkTotal(newScore);
    console.log(newScore);
}

/**
 * checks whether player has reached 10 points and won the game
 */

function checkTotal(newScore) {
    console.log("check");
    if (newScore = 0) { console.log("end"); }
    if (newScore > 19) {
        resultBox.textContent = "You've done it, 10 points!";
        resetButton.style.visibility = "visible";
        scoreBox.style.visibility = "hidden";
        scoreBox.textContent = 0;
    }
}

/**
 * return game to initial state for user to play again
 */

function resetGame() {
    dealButton.style.visibility = "visible";
    resetButton.style.visibility = "hidden";
    document.getElementById('player-card-1-img').src = "/assets/images/back_of_card.png";
    document.getElementById('player-card-2-img').src = "/assets/images/back_of_card.png";
    document.getElementById('player-card-3-img').src = "/assets/images/back_of_card.png";
    houseScoreBox.textContent = 0;
    document.getElementById('house-card-1-img').src = "/assets/images/back_of_card.png";
    document.getElementById('house-card-2-img').src = "/assets/images/back_of_card.png";
    document.getElementById('house-card-3-img').src = "/assets/images/back_of_card.png";
    playerScoreBox.textContent = 0;
    resultBox.textContent = "";
    playerBet.value = "";
    scoreBox.style.visibility = "visible";
}