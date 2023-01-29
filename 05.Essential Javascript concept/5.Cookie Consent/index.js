
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const submitBtn = document.querySelector('#submit')
const resetBtn = document.querySelector('#reset')
const form = document.getElementById('form')
const modalText = document.getElementById('modal-text')
const loadingSvg = document.getElementById('loading')
const modalInner = document.getElementById('modal-inner')

setTimeout(function(){
    modal.style.display = 'block'
}, 1500)

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const submitFormData = new FormData(form)
    const userName = submitFormData.get('userName')
    console.log(userName)
    loadingSvg.style.display = 'block'
    modalText.innerText = 'Uploading your data to Dark web...'
    setTimeout(() => {
        modalText.innerText = 'Sending your Data...'
    },1500)
    setTimeout(() => {
        uploadedData(userName)
    },3000)
    
})


modalCloseBtn.addEventListener('click', closeModalFun)


function closeModalFun(){
    loadingSvg.style.display = 'none'
    modal.style.display = 'none'
    modalInner.innerHTML = `  <h2>We ❤️ Your Data!</h2>
    <img id='loading' src="./images/loading.svg" alt="loading">
    <p class="modal-text" id="modal-text">We have a strict policy on tracking and spamming: we'll definitely track you, and we'll definitely spam you. To use this site, enter your name and email address and accept our ridiculous terms and conditions.</p>	 ` 
    form.style.display = 'block'
    
}


function uploadedData(userName){
    console.log('uploaded')
    modalInner.innerHTML = `<h2>Thanks ${userName} sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    ` 
    form.style.display = 'none'
}