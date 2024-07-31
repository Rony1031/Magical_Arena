const assert = require('assert');
const Dice = require('../../src/models/Dice');

function testDiceRoll() {
    const dice = new Dice();
    const roll = dice.roll();
    assert.ok(roll >= 1 && roll <= 6);
}

testDiceRoll();

console.log('Dice tests passed');