// Generate Random Number from 1 to 6
let getDiceRollArray = (diceCount) => {
    return Array(diceCount)
      .fill(0)
      .map(function () {
        return Math.floor(Math.random() * 6 + 1);
      });
  };



export {getDiceRollArray};