const icon = document.querySelector('#icon')
const colorPicker = document.getElementById('color-picker')
const schemeOptions = document.getElementById('scheme')
const schemeBtn = document.getElementById('color-scheme-btn')
let colorInHex = '000'
let selectSchemeValue = 'monochrome'
const colorFill = document.querySelectorAll('.color-fill')
const colorText = document.querySelectorAll('.color-text')
const popUp  = document.getElementById('popup')
// light and dark mode toggles 

window.addEventListener('load',function(){
    if(this.localStorage.getItem('mode') == 'light'){
        icon.src = 'images/moon.png'
        this.document.body.classList.add('light')
    }else{
        icon.src = 'images/sun.png'
    }
})
icon.addEventListener('click', function (e) {
    

    if (document.body.classList.contains('light')) {
        e.target.src = 'images/sun.png'
        localStorage.setItem('mode','dark')


    } else {
        e.target.src = 'images/moon.png'
        localStorage.setItem('mode','light')
    }
    document.body.classList.toggle('light')


})


colorPicker.addEventListener("input",function(e){
    colorInHex = e.target.value.substring(1,)
})

schemeOptions.addEventListener('click',function(e){
    selectSchemeValue = e.target.value
})

schemeBtn.addEventListener('click',function(){
    const urlApi = `https://www.thecolorapi.com/scheme?hex=${colorInHex}&mode=${selectSchemeValue}`

    fetch(urlApi)
        .then(res => res.json())
        .then(data => {
        
            let i = 0
            colorText.forEach(text => {
                text.textContent = data.colors[i].hex.value
                i+=1
                text.addEventListener('click',function clickToCopy(){
                    navigator.clipboard.writeText(text.textContent)
                    showAndRemovePopUp()
                })
            })
            i = 0
            colorFill.forEach(color => {
                color.style.backgroundColor = data.colors[i].hex.value
                i+=1
                color.addEventListener('click',function clickToCopy(){
                    navigator.clipboard.writeText(color.style.backgroundColor)
                    showAndRemovePopUp()
                    
                })
            })
        })
})


function showAndRemovePopUp(){
    setTimeout(() => {
        
        popUp.hidden = false

    },300)
    setTimeout(() => {
        popUp.hidden = true

    },1200)
}