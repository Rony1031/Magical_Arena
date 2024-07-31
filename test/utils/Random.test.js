const assert = require('assert');
const getRandomInt = require('../../src/utils/Random.js');

// describe('Random', () => {
//     it('it should return a number between 1 and max', () => {
//         const max = 10;
//         const randomInt = getRandomInt(max);
//         assert.ok(randomInt >= 1 && randomInt <= max);
//     });
// });


function testGetRandomInt() {
    const max = 6;
    const randomInt = getRandomInt(max);
    assert.ok(randomInt >= 1 && randomInt <= max);
}

testGetRandomInt();

console.log('Random tests passed.');