alert('For winning you have to score 10 points')


const homeScore = document.querySelector('.home-score')
const guestScore = document.querySelector('.guest-score')
const newGame = document.querySelector('#new-game')
const heading = document.querySelectorAll('.heading')
const winner  = document.querySelector('.winner')

const addToHome = document.querySelector('.add-home-score')
const addToGuest = document.querySelector('.add-guest-score')


const reduceFromHome = document.querySelector('.reduce-home-score')
const reduceFromGuest = document.querySelector('.reduce-guest-score')
const listItem = document.querySelectorAll('li')
const ulList = document.querySelectorAll('ul')


let homeTotal = 0
let guestTotal = 0

function declareWinner(){
    if (homeTotal >= 10 || guestTotal >= 10){
        
        let winnerName = homeTotal>guestTotal ? 'Home' : 'Guest'
        listItem.forEach((i) =>{
            i.classList.add('game-finished')
            i.hidden = true
            
        })
        
        setTimeout(() => {    
            heading.forEach((h1) =>{
                h1.hidden = true
                
                winner.textContent = `${winnerName} is the winner`
                winner.hidden =false
            })
        }, 800);

        
        // setTimeout(() => {    
        //     createNewGame()
        // }, 2200);
        

    }
}    

function addWinnerClass(score){
    score.classList.add('current-winner')
}
function removeWinnerClass(score){
    score.classList.remove('current-winner')
}

function checkCurrentWinner(){
    if (homeTotal > guestTotal){  
        addWinnerClass(homeScore)
        removeWinnerClass(guestScore)
    }else if(homeTotal < guestTotal){
        removeWinnerClass(homeScore)
        addWinnerClass(guestScore)
    }else{
        removeWinnerClass(homeScore)
        removeWinnerClass(guestScore)
    }
}


addToHome.addEventListener('click',e =>{
    homeTotal += parseInt(e.target.textContent.substring(1,))
    homeScore.textContent = homeTotal
    checkCurrentWinner()
    declareWinner()
    console.log(homeTotal)
    // console.log(e.target.parentNode.parentNode)
})

reduceFromHome.addEventListener('click',e =>{
    
    homeTotal -= parseInt(e.target.textContent.substring(1,))
    homeScore.textContent = homeTotal
    checkCurrentWinner()
    declareWinner()
    // console.log(e.target.parentNode.parentNode)
})


addToGuest.addEventListener('click',e =>{
    // console.log(e.target.parentNode.parentNode)
    
    guestTotal += parseInt(e.target.textContent.substring(1,))
    guestScore.textContent = guestTotal
    checkCurrentWinner()
    declareWinner()
})

reduceFromGuest.addEventListener('click',e =>{
    guestTotal -= parseInt(e.target.textContent.substring(1,))
    guestScore.textContent = guestTotal
    checkCurrentWinner()
    declareWinner()
})

function createNewGame(){
    heading.forEach((h1) =>{
        h1.hidden = false
        winner.hidden =true
    })
    listItem.forEach((i) =>{
        i.classList.remove('game-finished')
        i.hidden = false
        
    })
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeTotal = 0
    guestTotal = 0
    homeScore.classList.remove('current-winner')
    guestScore.classList.remove('current-winner')
}


newGame.addEventListener('click' , function() {
    createNewGame()

})