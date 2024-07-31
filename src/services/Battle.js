const Dice = require('../models/Dice');


class Battle{

    constructor(player1,player2){
        this.player1=player1;
        this.player2=player2;
        this.attckingDice= new Dice();
        this.defendingDice= new Dice();
    }

    fight(){
        let attacker = this.player1.health<=this.player2.health?this.player1:this.player2;
        let defender = attacker === this.player1?this.player2:this.player1;

        while(attacker.isAlive() && defender.isAlive()){
            this.attackTurn(attacker,defender);

            if(defender.isAlive()){
                [attacker,defender] = [defender,attacker];
            }
        }

        return attacker.isAlive() ? attacker:defender;
    }

    attackTurn(attacker,defender){
        const attackerRoll = this.attckingDice.roll();
        const defenseRoll = this.defendingDice.roll();

        const attackDamage = attacker.attack*attackerRoll;
        const defenseValue = defender.strength*defenseRoll;

        const damage = Math.max(attackDamage-defenseValue,0);

        defender.health -= damage;
        
        console.log("Step: ");
        console.log(`${attacker.name} attacks with roll ${attackerRoll} for ${attackDamage} damage.`);
        console.log(`${defender.name} defends with roll ${defenseRoll} for ${defenseValue} defense.`);
        console.log(`${defender.name} takes ${damage} damage and is now at ${defender.health} health`);
    }
}

module.exports = Battle;