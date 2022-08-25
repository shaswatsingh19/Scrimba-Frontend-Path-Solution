// Generate Random Number from 1 to 10
let getDiceRollArray = () => { 
    return Math.ceil(Math.random()*10)
}

const hero = {
    elementId : "hero",
    name : "Wizard",
    avatar : "images/wizard.png",
    health : 60,
    diceRoll : [],
    diceCount :3
}
const monster = {
    elementId : "monster",
    name : "Orc",
    avatar : "images/orc.png",
    health : "40",
    diceRoll : [],
    diceCount :2
}
function renderCharacter(data) {
    
    // we use object destructuring so that we don't need to write object.property everywhere 
    const {elementId,name,avatar,health,diceRoll , diceCount} = data


    // Generating a array of diceCount of random number 
    for(let i=0; i<diceCount ;i++){
        diceRoll.push(getDiceRollArray())
    }

    // making new divs that will go inside dice container 
    let diceHtml =  diceRoll.map(roll => {
        return `<div class="dice">${roll}</div>`
    }).join('</br>')
    
    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHtml}
                
            </div>
        </div>`
}

renderCharacter(hero);
renderCharacter(monster);
