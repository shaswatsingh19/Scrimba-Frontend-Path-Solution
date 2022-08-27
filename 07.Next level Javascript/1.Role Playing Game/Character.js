import {getDiceRollArray , getDicePlaceholderHtml } from './utils.js'

//  Constructor  function
function Character(data) {

    // assign function copy data to this object as a new object i.e. deep copy
    Object.assign(this, data);
    
    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    


    this.getDiceHtml = function(diceCount){
      // return getDiceRollArray(diceCount)
      //   .map((num) => `<div class="dice">${num}</div>`)
      //   .join("");
      this.currentDiceScore = getDiceRollArray(this.diceCount)

    };
    
  
    this.getCharacterHtml = function () {
      const { elementId, name, avatar, health, diceCount ,diceArray} = this;
      let diceHtml = this.getDiceHtml(diceCount)
  
      // return the value and assign outside to innerHtml of that
      // making new divs that will go inside dice container and adding number from getDiceRollArray
      return  `<div class="character-card">
                  <h4 class="name"> ${name} </h4>
                  <img class="avatar" src="${avatar}" />
                  <div class="health">health: <b> ${health} </b></div>
                  <div class="dice-container">
                      ${diceArray}
                  </div>
              </div>`;
      };
  
  }

export {Character}