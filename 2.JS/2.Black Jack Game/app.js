// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let player = {
    name:"boss",
    money:100
}

let cards = []
let sum = 0
let hasBlackJack  = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " has "+player.money+" dollars"


function getRandomCard(){
    
    // if 1     -> return 11
    // if 11-13 -> return 10
    
    let rand = Math.floor( Math.random()*13 ) + 1;
    console.log(rand)
    if(rand === 1) return 11;
    else if(rand >10) return 10
    return rand
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let SecondCard = getRandomCard();
    cards = [firstCard,SecondCard];
    sum = cards[0] + cards[1];

    renderGame();


}

function renderGame(){
    // cardsEl.textContent += " "+cards[0] +" "+cards[1];
    cardsEl.textContent = "Cards: "
    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i]+" "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
    sumEL.textContent ="Sum: "+ sum;
}

function newCard(){
    // only gets a new card if it player is alive and also in the game(not having blackjack)

    if(isAlive && !hasBlackJack){
        console.log("New card clicked")
        let card = getRandomCard();
        cards.push(card);
        sum = sum + card;

        renderGame();
    }

}
