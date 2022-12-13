/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const submitBtn = document.querySelector('#submit')
const resetBtn = document.querySelector('#reset')
const form = document.querySelector('#form')
const modalText = document.getElementById('modal-text')
const loadingSvg = document.getElementById('loading')

form.addEventListener('submit',(e) => {
    e.preventDefault()
    console.log('form submitted')
    loadingSvg.style.display = 'block'
    modalText.innerText = 'Uploading your data to Dark web...'
})


setInterval(function(){
    modal.style.display = 'block'
    
}, 1500)


modalCloseBtn.addEventListener('click',() => {
    loadingSvg.style.display = 'none'
    modal.style.display = 'none'
    modalText.innerText = "We have a strict policy on tracking and spamming: we'll definitely track you, and we'll definitely spam you. To use this site, enter your name and email address and accept our ridiculous terms and conditions."
})

