const hero = {
    elementId : "hero",
    name : "Wizard",
    avatar : "images/wizard.png",
    health : 60,
    diceRoll : [3,1,4],
    diceCount :3
}
const monster = {
    elementId : "monster",
    name : "Orc",
    avatar : "images/orc.png",
    health : "40",
    diceRoll : [2,4],
    diceCount :2
}
function renderCharacter(data) {
    
    // we use object destructuring so that we don't need to write object.property everywhere 
    const {elementId,name,avatar,health,diceRoll , diceCount} = data

    let diceHtml = ''

    diceRoll.forEach(roll => {
        diceHtml +=  `<div class="dice">${roll}</div>`
    })


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
