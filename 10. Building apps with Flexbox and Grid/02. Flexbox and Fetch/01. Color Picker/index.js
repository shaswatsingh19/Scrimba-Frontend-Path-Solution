
const container = document.getElementById('container')

function displayColors(colors){

    const myColorHtml = colors.map(el => {

        return `<div class="items" style="background-color: ${el.value}"></div>`

    }).join('')

    container.innerHTML = myColorHtml



}
    
async function getColors(count){
    const url =  `https://apis.scrimba.com/hexcolors?count=${count}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    displayColors(data.colors)

    
}

getColors(100) 