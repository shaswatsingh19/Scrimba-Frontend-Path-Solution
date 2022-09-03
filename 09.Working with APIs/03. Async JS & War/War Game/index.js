const Newurl = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
const newDeckBtn = document.getElementById('new-deck')
const drawCardBtn = document.getElementById('draw-card')
let remainingCard = document.getElementById('remaining-card')
// const compImg = document.querySelector('.card-img-comp')
// const userImg = document.querySelector('.card-img-user')
let compScore = document.getElementById('computer-score')
let userScore = document.getElementById('user-score')
const cardImg = document.querySelectorAll('.card-img')
let heading  = document.querySelector('h1')

let deckId;

// getting the initial deck of card 
function getNewDeck() {

    drawCardBtn.disabled = false
    compScore.textContent = 0
    userScore.textContent = 0

    fetch(Newurl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
            console.log(deckId)
            remainingCard.textContent = data.remaining
        })
}

function drawCardFromDeck() {
    const drawUrl = `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`

    console.log(drawUrl)
    fetch(drawUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            let imgNumber = 0
            cardImg.forEach(card => {
                card.innerHTML = `<img src="${data.cards[imgNumber].image}">`
                imgNumber+=1
            })

            if(data.cards[0].code > data.cards[1].code ){
                compScore.textContent = parseInt(compScore.textContent) + 1
            }else{
                userScore.textContent = parseInt(userScore.textContent) + 1
            }
            console.log(compScore,userScore)
            remainingCard.textContent = parseInt(remainingCard.textContent) - 2

            if (remainingCard.textContent == 46){
                gameEnds()
            }
        })

}

newDeckBtn.addEventListener('click', getNewDeck)

// Drawing 2 card from the deck 
drawCardBtn.addEventListener('click', drawCardFromDeck)


function gameEnds(){
    drawCardBtn.disabled = true

    console.log('Game ends')

    let userFinalS = parseInt(userScore.textContent)
    let compFinalS = parseInt(compScore.textContent)
    
    console.log(userScore,compScore)
    console.log(userFinalS,compFinalS)
    
    if(compFinalS > userFinalS){
        heading.textContent = 'Computer Wins'
    }else if(compFinalS < userFinalS ){
        heading.textContent = 'User Wins'
    }else{
        heading.textContent = 'Draw'
    }


}