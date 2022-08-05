const alphabets =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols =["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let icon = document.querySelector('#icon')
const  numBtn = document.querySelector('#number')
const  symbolBtn = document.querySelector('#symbol')

icon.addEventListener('click' , function(e){
    // img.src = 'images/moon.png'
    document.body.classList.toggle('light-theme')
    if(document.body.classList.contains('light-theme')){
        e.target.src = 'images/moon.png'
    }else{
        e.target.src = 'images/sun.png'
        
    }
})


numBtn.addEventListener('click',function(){
    numBtn.classList.toggle('button-active')
})
symbolBtn.addEventListener('click',function(){
    symbolBtn.classList.toggle('button-active')
})
