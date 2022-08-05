const alphabets =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols =["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let characters = []

let icon = document.querySelector('#icon')
const defaultPassLen = 15
let passLenInput = document.querySelector('#password-length')
let passLen = 0
const  symbolBtn = document.querySelector('#symbol')
const  digitBtn = document.querySelector('#digit')
const generateBtn  = document.querySelector('#generate-btn')
let passwords = document.querySelectorAll('.password')

/* Light and Dark mode toggle */
icon.addEventListener('click' , function(e){
    
    document.body.classList.toggle('light-theme')
    if(document.body.classList.contains('light-theme')){
        e.target.src = 'images/moon.png'
    }else{
        e.target.src = 'images/sun.png'   
    }
})


symbolBtn.addEventListener('click',function(){
    symbolBtn.classList.toggle('button-active')
})
digitBtn.addEventListener('click',function(){
    digitBtn.classList.toggle('button-active')
})

function checkLength(){
    if (passLenInput.value == ''){
        return 15
    }else{
        return parseInt(passLenInput.value)
    }
}

function checkSymbolOrDigit(){
    let isSymbolActive = false
    let isDigitActive = false

    if (symbolBtn.classList.contains('button-active')){
        isSymbolActive = true
    }
    
    if (digitBtn.classList.contains('button-active')){
        isDigitActive = true
    }

    if (isSymbolActive && isDigitActive ){
        return [...alphabets,...digits,...symbols]
    }else if (!isSymbolActive && isDigitActive){
        return [...alphabets,...digits]
    }else if (isSymbolActive && !isDigitActive){
        return [...alphabets,...symbols]
    }else{
        return [...alphabets]
    }
}

generateBtn.addEventListener('click',()=>{

    passLen = checkLength()
    if (passLen>30 || passLen<8){
        alert('Please choose password length between 8 to 30')
        passLenInput.value = 30
        checkLength()
    }
    else{
        characters = checkSymbolOrDigit()
    
        passwords.forEach(pass=>{
            let currPassword = ''
            while(currPassword.length < passLen){
                let index = Math.floor(Math.random()*characters.length)
                currPassword += characters[index]
            }
            pass.textContent = currPassword
        })
    }
})


// Copied to clipboard  
passwords.forEach(password =>{
    password.addEventListener('click',e=>{
        navigator.clipboard.writeText(e.target.textContent)
        setTimeout(() => {
            alert(e.target.textContent +' has been copied')
        }, 500);
        
    })
})