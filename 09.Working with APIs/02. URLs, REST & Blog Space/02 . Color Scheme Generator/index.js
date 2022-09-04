const icon = document.querySelector('#icon')


// light and dark mode toggles 
icon.addEventListener('click',function(e){

    if(document.body.classList.contains('light')){
        document.body.classList.toggle('light')
        e.target.src = 'images/sun.png'

        
    }else{
        document.body.classList.toggle('light')
        e.target.src = 'images/moon.png'

    }
    
})