const assert = require('assert');
const Player = require('../../src/models/Player');
const Battle = require('../../src/services/Battle');

// describe('Battle', () => {
//     it('it should declare a winner when one player dies', () => {
//         const playerA = new Player('Player A', 1, 5, 10);
//         const playerB = new Player('Player B', 1, 5, 10);

//         const battle = new Battle(playerA, playerB);
//         const winner = battle.fight();

//         assert.ok(winner.isAlive());
//         assert.strictEqual(winner === playerA || winner === playerB, true);
//     });
// });


function testBattleWinner() {
    const playerA = new Player('Player A', 1, 5, 10);
    const playerB = new Player('Player B', 1, 5, 10);

    const battle = new Battle(playerA, playerB);
    const winner = battle.fight();

    assert.ok(winner.isAlive());
    assert.strictEqual(winner === playerA || winner === playerB, true);
}

testBattleWinner();

console.log('Battle tests passed.');