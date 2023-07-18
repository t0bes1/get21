document.addEventListener("click", function () {
    runGame();
});

function runGame() {
    let num1 = Math.floor(Math.random() * 52) + 1;
    let num2 = Math.floor(Math.random() * 52) + 1;

    console.log(num1);
    console.log(num2);

    displayPlayerCards(num1, num2);
}

function displayPlayerCards(operand1, operand2) {

    document.getElementById('player-card-1').textContent = operand1;
    document.getElementById('player-card-2').textContent = operand2;
    document.getElementById('player-score').textContent = operand1 + operand2;
}


function switchGameButtons() {
    let myElement = document.getElementById('deal-button');
    myElement.style.width = '1000px';
    console.log("Hello");
}