

let firstHand = getRandomCard();
let secondHand = getRandomCard();
let cards = [firstHand, secondHand]
let sum = cards[0]+ cards[1];
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
    name: "Gio",
    chips: 145,
}

playerEl = document.getElementById("player-el")

playerEl.innerText = player.name + ": $" + player.chips;

function getRandomCard() {
    min = 1;
    max = 11;
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function renderGame() {
    sumEl.innerText = "Sum:";
    cardEl.innerText = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.innerText += " " + cards[i] + " ";
    }
    sumEl.innerText += " " + sum;
    //cardEl.innerText += " " + cards[0] + " " + cards[1];

    if (sum <= 20) {
        message = "Do you want to draw a new card!";
    }
    else if (sum === 21) {
        message = "You have blackjack";
        hasBlackJack = true;
    }
    else {
        message = "You lost";
        isAlive = false;
    }
    messageEl.textContent  = message;
}

function startGame() {
    renderGame();
}

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        console.log(cards)
        renderGame();
    }    
}
