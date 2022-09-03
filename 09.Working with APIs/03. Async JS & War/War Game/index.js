const btn = document.getElementById('btn')
const Newurl = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"

let deckId ;


btn.addEventListener('click', getDeck)

// getting the initial deck of card 
function getDeck(){
    fetch(Newurl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        deckId = data.deck_id
        console.log(deckId)
        
        // getting two card from deck of card 
        drawTwoCards(deckId)

    })
}


function drawTwoCards(deckId){

    const drawUrl =  `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`

    console.log(drawUrl)
    fetch(drawUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

}