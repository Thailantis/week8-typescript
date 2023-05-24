abstract class Character {
    protected name: string;
    protected gold: number;

    constructor(name: string, gold:number = 0){
        this.name = name;
        this.gold = gold;
    }

    abstract attack(): void;
    abstract defend(): void;

    collectGold(amount: number): void {
        this.gold += amount;
    }
}

interface ClubAttacker {
    attackWithClub(): void;
}

interface ShieldDefender {
    defendWithShield(): void;
}

interface SwordAttacker {
    attackWithSword(): void;
}

interface ArmorDefender {
    defendWithArmor(): void;
}

interface BowAndArrowAttacker {
    attackWithBowAndArrow(): void;
}

interface TunicDefender {
    defendWithTunic(): void;
}

class Ogre extends Character implements ClubAttacker, ShieldDefender {
    attack(): void {
        this.attackWithClub();
    }

    defend(): void{
        this.defendWithShield();
    }

    attackWithClub(): void {
        console.log(`${this.name} attacks with a club!`);
    }

    defendWithShield(): void {
        console.log(`${this.name} defends with a shield!`);
    }
}

class Peon extends Character implements ClubAttacker, ShieldDefender {
    attack(): void {
        this.attackWithClub();
    }

    defend(): void{
        this.defendWithShield();
    }

    attackWithClub(): void {
        console.log(`${this.name} attacks with a club!`);
    }

    defendWithShield(): void {
        console.log(`${this.name} defends with a shield!`);
    }
}

class Knight extends Character implements SwordAttacker, ArmorDefender {
    attack(): void {
        this.attackWithSword();
    }

    defend(): void{
        this.defendWithArmor();
    }

    attackWithSword(): void {
        console.log(`${this.name} attacks with a sword!`);
    }

    defendWithArmor(): void {
        console.log(`${this.name} defends with an armor!`);
    }
}

class Archer extends Character implements BowAndArrowAttacker, TunicDefender {
    attack(): void {
        this.attackWithBowAndArrow();
    }

    defend(): void{
        this.defendWithTunic();
    }

    attackWithBowAndArrow(): void {
        console.log(`${this.name} attacks with a bow and arrow!`);
    }

    defendWithTunic(): void {
        console.log(`${this.name} defends with a tunic!`);
    }
}

const ogre = new Ogre("Shrek");
ogre.attack();
ogre.defend();
ogre.collectGold(10);
console.log(`${ogre.name} has ${ogre.gold} gold.`);

const peon = new Peon("Moka");
peon.attack();
peon.defend();
peon.collectGold(9);
console.log(`${peon.name} has ${peon.gold} gold.`);

const knight = new Knight("Sir Percival");
knight.attack();
Knight.defend();
Knight.collectGold(7);
console.log(`${knight.name} has ${knight.gold} gold.`);

const archer = new Archer("Artemis");
archer.attack();
archer.defend();
archer.collectGold(5);
console.log(`${archer.name} has ${archer.gold} gold.`);
