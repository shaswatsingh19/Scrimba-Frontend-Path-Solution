let carousel = document.querySelectorAll('.carousel-item')
let button = document.querySelectorAll('button')
let currEle = 0


function changeImage(){
    carousel[currEle].classList.toggle('carousel-item-visible')
}

button.forEach(btn => {
    btn.addEventListener('click', e=>{

        changeImage()
        if(e.target.id === 'carousel-button-next'){
            currEle =   (currEle+1)%carousel.length
        }else{
            currEle =   (currEle+carousel.length-1)%carousel.length
        }
        changeImage()
    })
})



setInterval(() => {
    changeImage()
    currEle =   (currEle+1)%carousel.length
    changeImage()
},5000)


/*
Feature  suggestion 
Automated transition
show the user which slide your on
*/