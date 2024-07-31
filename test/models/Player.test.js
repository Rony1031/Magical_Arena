const assert = require('assert');
const Player = require('../../src/models/Player');

function testPlayerIsAlive() {
    const player = new Player('Test Player', 10, 5, 5);
    assert.strictEqual(player.isAlive(), true);
}

function testPlayerIsDead() {
    const player = new Player('Test Player', 0, 5, 5);
    assert.strictEqual(player.isAlive(), false);
}


testPlayerIsAlive();
testPlayerIsDead();

console.log('Player tests passed.');
