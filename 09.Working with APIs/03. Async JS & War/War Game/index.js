const newDeckBtn = document.getElementById('new-deck')
const drawCardBtn = document.getElementById('draw-card')
const Newurl = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"

let deckId ;


newDeckBtn.addEventListener('click', getNewDeck)

// getting the initial deck of card 
function getNewDeck(){
    fetch(Newurl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        deckId = data.deck_id
        console.log(deckId)
        

    })
}

// Drawing 2 card from the deck 
drawCardBtn.addEventListener('click', drawCardFromDeck)


function drawCardFromDeck(){

    const drawUrl =  `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`

    console.log(drawUrl)
    fetch(drawUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

}