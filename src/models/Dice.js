
const getRandomInt = require('../utils/random');

class Dice {

    //We can change the dice size to the required
    constructor(sides = 6) {
        this.sides = sides;
    }

    roll(){
        return getRandomInt(6);
    }
}

module.exports = Dice;
