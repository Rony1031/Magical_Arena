const Player = require('./models/Player');
const Battle = require('./services/Battle');


//We can the values for the Players from here
// Name , health , strength, attack
const PlayerA = new Player('Player A',50,5,10);
const PlayerB = new Player('Player B',100,10,5);


const battle = new Battle(PlayerA,PlayerB);


const winner = battle.fight();


console.log(`The winner is ${winner.name} with ${winner.health} health remaining`);