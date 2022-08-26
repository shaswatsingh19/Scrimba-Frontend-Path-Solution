// Generate Random Number from 1 to 6
let getDiceRollArray = (diceCount) => {
  return Array(diceCount)
    .fill(0)
    .map(function () {
      return Math.floor(Math.random() * 6 + 1);
    });
};

const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceCount: 3,
};
const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: "40",
  diceCount: 2,
};

//  Constructor  function
function Character(data) {

  // assign function copy data to this object as a new object i.e. deep copy
  Object.assign(this, data);

  this.getDiceHtml = function(diceCount){
    return getDiceRollArray(diceCount)
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };

  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount } = this;
    let diceHtml = this.getDiceHtml(diceCount)

    // return the value and assign outside to innerHtml of that
    // making new divs that will go inside dice container and adding number from getDiceRollArray
    return  `<div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`;
    };

}

const wizard = new Character(hero);
const orc = new Character(monster);


document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
document.getElementById('monster').innerHTML = orc.getCharacterHtml()
