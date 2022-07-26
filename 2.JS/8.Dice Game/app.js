// Create variables for the game statel

let message = document.getElementById('message')

let score1 = 0
let score2 = 0
let p1Turn = true
let p1Dice = document.getElementById('player1Dice')
let p2Dice = document.getElementById('player2Dice')
let p1ScoreBoard = document.getElementById('player1Scoreboard')
let p2ScoreBoard = document.getElementById('player2Scoreboard')
let dice = document.getElementsByClassName('dice')

let rollBtn = document.getElementById('rollBtn')

rollBtn.addEventListener('click',gamePlay)
let resetBtn = document.getElementById('resetBtn')

function gamePlay(){
    
    const randNum = Math.floor(Math.random()*6)+1
    console.log(randNum)

    if(p1Turn){

        p1Dice.textContent = randNum
        p1Dice.classList.remove('active')
        p2Dice.classList.add('active')
        message.textContent = 'Player 2 Turns'

        score1 += randNum
        p1ScoreBoard.textContent = score1
        // p1Turn = false

    }
    else{
        p2Dice.textContent = randNum
        p2Dice.classList.remove('active')
        p1Dice.classList.add('active')
        message.textContent = 'Player 1 Turns'
        
        score2 += randNum
        p2ScoreBoard.textContent = score2
        // p1Turn = true
        
    }
    p1Turn = !p1Turn

    if (score1>=20){
        message.textContent = "Player 1 has won! 🥳"
        changeDisplay()
    }
    else if(score2>=20){        
        message.textContent = "Player 2 has won! 🥳"
        changeDisplay()
    }

}

function changeDisplay(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "inline-block"
}

resetBtn.addEventListener('click',resetGame)

function resetGame(){
    
    message.textContent = 'Player 1 Turns'
    score1=0
    score2=0
    p1ScoreBoard.textContent = 0
    p2ScoreBoard.textContent = 0
    p1Turn = true
    p1Dice.textContent = '-'
    p2Dice.textContent = '-'
    p1Dice.classList.add('active')
    p2Dice.classList.remove('active')
    resetBtn.style.display = "none"
    rollBtn.style.display = "inline-block"
}



