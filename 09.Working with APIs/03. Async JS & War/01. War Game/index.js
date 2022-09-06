const Newurl = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
const newDeckBtn = document.getElementById('new-deck')
const drawCardBtn = document.getElementById('draw-card')
let remainingCard = document.getElementById('remaining-card')
const compScoreEl = document.getElementById('computer-score')
const userScoreEl = document.getElementById('user-score')
let compScore = 0
let userScore = 0
const cardImg = document.querySelectorAll('.card-img')
let heading  = document.querySelector('h1')

let deckId;

function gameStarts(){
    drawCardBtn.disabled = false
    compScore= 0
    userScore= 0
    userScoreEl.textContent = userScore
    compScoreEl.textContent = compScore
    heading.textContent = "War!"
    heading.style.textShadow = "none"
}

function gameEnds(){
    drawCardBtn.disabled = true

    let userFinalS = parseInt(userScoreEl.textContent)
    let compFinalS = parseInt(compScoreEl.textContent)
    
    console.log(userScoreEl,compScoreEl)
    console.log(userFinalS,compFinalS)

    if(compFinalS > userFinalS){
        heading.textContent = 'Computer Wins'
    }else if(compFinalS < userFinalS ){
        heading.textContent = 'User Wins'
    }else{
        heading.textContent = 'Draw'
    }

    heading.style.textShadow = '0 0 20px white'
}

// getting the initial deck of card 
function getNewDeck() {

    gameStarts()
    fetch(Newurl)
        .then(res => res.json())
        .then(data => {
            
            deckId = data.deck_id
            
            remainingCard.textContent = data.remaining
        })
}


function drawCardFromDeck() {
    const drawUrl = `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`

    console.log(drawUrl)
    fetch(drawUrl)
        .then(res => res.json())
        .then(data => {
            

            let imgNumber = 0
            
            cardImg.forEach(card => {
                card.innerHTML = `<img src="${data.cards[imgNumber].image}">`
                imgNumber+=1
            })

            checkScore(data.cards[0],data.cards[1])

            remainingCard.textContent = data.remaining

            if (remainingCard.textContent == 0){
                gameEnds()
            }
        })

}


function checkScore(card1,card2){
    
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]

    let card1Value = valueOptions.indexOf(card1.value)
    let card2Value = valueOptions.indexOf(card2.value)

    if(card1Value > card2Value){
        compScore++
        compScoreEl.textContent = compScore
    }else if(card1Value < card2Value){
        userScore++
        userScoreEl.textContent = userScore
    }

}

newDeckBtn.addEventListener('click', getNewDeck)

// Drawing 2 card from the deck 
drawCardBtn.addEventListener('click', drawCardFromDeck)

