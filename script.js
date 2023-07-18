
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

/**
 * player cards
 */

function playerCards() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    console.log(num1);
    console.log(num2);

    displayPlayerCards(num1, num2);
    switchGameButtons();
}

function displayPlayerCards(operand1, operand2) {

    document.getElementById('player-card-1').textContent = operand1;
    document.getElementById('player-card-2').textContent = operand2;
    calculatePlayerTotal();
}

function calculatePlayerTotal() {
    let card1 = parseInt(document.getElementById('player-card-1').innerText);
    let card2 = parseInt(document.getElementById('player-card-2').innerText);
    let card3 = parseInt(document.getElementById('player-card-3').innerText);
    let playerScore = card1 + card2 + card3;
    document.getElementById('player-score').textContent = playerScore;
    checkPlayerTotal(playerScore);
}

function switchGameButtons() {

    dealButton.style.visibility = "hidden";
    hitButton.style.visibility = "visible";
    standButton.style.visibility = "visible";
}

function houseCards() {
    let num4 = Math.floor(Math.random() * 10) + 1;
    let num5 = Math.floor(Math.random() * 10) + 1;

    displayHouseCards(num4, num5);
    hitButton.style.visibility = "hidden";
    standButton.style.visibility = "hidden";
}

function displayHouseCards(operand1, operand2) {

    document.getElementById('house-card-1').textContent = operand1;
    document.getElementById('house-card-2').textContent = operand2;
    calculateHouseTotal();
}

function calculateHouseTotal() {
    let card4 = parseInt(document.getElementById('house-card-1').innerText);
    let card5 = parseInt(document.getElementById('house-card-2').innerText);
    let houseScore = card4 + card5;
    console.log(houseScore);
    document.getElementById('house-score').textContent = houseScore;
    checkGameResult(houseScore);
}

function hitCard() {
    let num3 = Math.floor(Math.random() * 20) + 1;
    document.getElementById('player-card-3').textContent = num3;
    hitButton.style.visibility = "hidden";
    standButton.style.visibility = "hidden";
    calculatePlayerTotal();
}

function checkPlayerTotal(playerScore) {
    console.log(playerScore);
    if (playerScore > 21) {
        document.write('<h1>Bust!</h1>');
        document.write('<input type="button" value="Reload Page" onClick="window.location.reload(true)">');
    } else {
        console.log("live");
        standButton.style.visibility = "visible";
    }
}

function checkGameResult(houseScore) {
    let playerResult = parseInt(document.getElementById('player-score').innerText);
    if (playerResult > houseScore) {
        document.write('<h1>Win!</h1>');
        document.write('<input type="button" value="Reload Page" onClick="window.location.reload(true)">');
    }
    else {
        document.write('<h1>Lose!</h1>');
        document.write('<input type="button" value="Reload Page" onClick="window.location.reload(true)">');
    }

}