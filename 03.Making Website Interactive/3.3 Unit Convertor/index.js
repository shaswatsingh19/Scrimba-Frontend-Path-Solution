let icon = document.querySelector('#icon')
const input = document.querySelector('#text')
const convertBtn = document.querySelector('#convert-btn')
const warning  = document.querySelector('#warning')
let toBeConverted = 1
let len = document.querySelector('#len')
let vol = document.querySelector('#vol')
let mass = document.querySelector('#mass')

let conversionCard = document.querySelector('.conversion')

icon.addEventListener('click',(e)=>{
    document.body.classList.toggle('light-mode')
    if (document.body.classList.contains('light-mode')){
        e.target.src = 'images/moon.png'
    }else{
        e.target.src = 'images/sun.png'

    }
})


input.addEventListener('input',(e)=>{
    // console.log(typeof e.target.value)
    if(Number(e.target.value)){
        warning.hidden = true

        console.log(Number(e.target.value))
    }else{
        warning.hidden = false
        console.log('NOT A NUMBER')
    }
})


function convertLength(toBeConverted){
    let meter = Math.round(toBeConverted*1000)/1000
    let meterToFoot = (toBeConverted*3.281).toFixed(3)
    let foot = meter
    let footToMeter = (toBeConverted/3.281).toFixed(3)
    // 1 meter = 3.281 feet

    let div = document.createElement('div')
    div.setAttribute('class','converted')
    
    let h3 = document.createElement('h3')
    h3.textContent ='Length (Meter/Feet)'
    
    let p = document.createElement('p')
    p.setAttribute('id',"len")
    p.textContent = `${meter} meters = ${meterToFoot} feet | ${foot} feet = ${footToMeter} meters`
    div.append(h3)
    div.append(p)
    conversionCard.append(div)
    
}


function convertVolume(toBeConverted){
    // 1 liter = 0.264 gallon
    let liter = Math.round(toBeConverted*1000)/1000
    let literToGallon = (toBeConverted*.264).toFixed(3)
    let gallon = liter
    let gallonToLiter = (toBeConverted/0.264).toFixed(3)
    // 1 meter = 3.281 feet
    

    let div = document.createElement('div')
    div.setAttribute('class','converted')
    
    let h3 = document.createElement('h3')
    h3.textContent ='Volume (Liters/Gallons)'
    
    let p = document.createElement('p')
    p.setAttribute('id',"vol")
    div.append(h3)
    div.append(p)

    p.textContent = `${liter} liters = ${literToGallon} gallons | ${gallon} gallon = ${gallonToLiter} liters`
    
    conversionCard.append(div)

}

function convertMass(toBeConverted){
    // 1 kilogram = 2.204 pound
    let kgToPound = (toBeConverted*2.204).toFixed(3)
    let poundTokg = (toBeConverted/2.204).toFixed(3)
    // 1 meter = 3.281 feet
    let div = document.createElement('div')
    div.setAttribute('class','converted')
    
    let h3 = document.createElement('h3')
    h3.textContent ='Mass (Kilograms/Pounds)'
    
    let p = document.createElement('p')
    p.setAttribute('id',"mass")
    div.append(h3)
    div.append(p)

    p.textContent =  `${toBeConverted} kilos = ${kgToPound} pound | ${toBeConverted} pounds = ${poundTokg} kilos`
    conversionCard.append(div)

}

convertBtn.addEventListener('click',()=>{
    
    if(warning.hidden == true){
        toBeConverted = input.value ? Number(input.value) : 1
        convertLength(toBeConverted)
        convertVolume(toBeConverted)
        convertMass(toBeConverted)
        // <div class="converted">
        //         <h3>Length (Meter/Feet)</h3>
        //         <p id="len">20 meters = 65.616 feet | 20 feet = 6.096 meters</p>
        //     </div>

        

    }
})