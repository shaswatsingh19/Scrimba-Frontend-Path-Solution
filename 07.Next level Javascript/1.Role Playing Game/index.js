// Generate Random Number from 1 to 6
let getDiceRollArray = (diceCount) => { 
    let diceRoll = []
    for(let i=0; i<diceCount ;i++){
        diceRoll.push(Math.floor(Math.random()*6 + 1))
    }
    return  diceRoll
}

const hero = {
    elementId : "hero",
    name : "Wizard",
    avatar : "images/wizard.png",
    health : 60,
    diceCount :3
}
const monster = {
    elementId : "monster",
    name : "Orc",
    avatar : "images/orc.png",
    health : "40",
    diceCount :2
}
function renderCharacter(data) {
    
    // we use object destructuring so that we don't need to write object.property everywhere 
    const {elementId,name,avatar,health, diceCount} = data


    // making new divs that will go inside dice container and adding number from getDiceRollArray
    let diceHtml =  getDiceRollArray(diceCount).map(num => `<div class="dice">${num}</div>`).join('')

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
