const Newurl = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
const newDeckBtn = document.getElementById('new-deck')
const drawCardBtn = document.getElementById('draw-card')
const remainingCard = document.getElementById('remaining-card')
const compImg = document.querySelector('.card-img-comp')
const userImg = document.querySelector('.card-img-user')
const compScore = document.getElementById('computer-score')
const userScore = document.getElementById('user-score')

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

            compImg.innerHTML = ''
            userImg.innerHTML = ''
            compImg.append(img1)
            userImg.append(img2)

        })

}


newDeckBtn.addEventListener('click', getNewDeck)

// Drawing 2 card from the deck 
drawCardBtn.addEventListener('click', drawCardFromDeck)

