const Newurl = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
const newDeckBtn = document.getElementById('new-deck')
const drawCardBtn = document.getElementById('draw-card')
const cards = document.getElementById('cards')

let deckId;

// getting the initial deck of card 
function getNewDeck() {
    fetch(Newurl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
            console.log(deckId)
        })
}

function drawCardFromDeck() {

    const drawUrl = `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`

    console.log(drawUrl)
    fetch(drawUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const img1Src = data.cards[0].image
            const img2Src = data.cards[1].image

            const img1 = document.createElement('img')
            img1.setAttribute('src',img1Src)
            const img2 = document.createElement('img')
            img2.setAttribute('src',img2Src)

            cards.innerHTML = ''
            cards.append(img1,img2)
        })

}


newDeckBtn.addEventListener('click', getNewDeck)

// Drawing 2 card from the deck 
drawCardBtn.addEventListener('click', drawCardFromDeck)

