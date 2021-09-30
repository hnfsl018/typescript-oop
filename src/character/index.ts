class Character {
    private hp: number = 100;
    private attackDamage: number;
    private armor: number;
    private name: string;
    private type: string;

    constructor(name: string, hp: number, attackDamage: number, armor: number, type: string) {
        this.name = name;
        this.hp = hp;
        this.attackDamage = attackDamage;
        this.armor = armor;
        this.type = type;
    }

    getName() {
        return this.name;
    }

    getHp() {
        return this.hp;
    }

    getAttackDamage() {
        return this.attackDamage
    }

    getArmor() {
        return this.armor
    }

    takeDamage(damage: number) {
        this.hp = this.hp - (damage);
        console.log(this.name + " takedamage " + damage + " unit :: remain hp :: ", this.hp)
        if (this.hp <= 0) {
            this.die();
        }
    }

    die() {
        console.log(this.name, " die ");
    }


}

interface CharacterAttack {
    attack(hero: Character): void;
}

class Tank extends Character implements CharacterAttack {

    constructor(name: string, hp: number, attackDamage: number, armor: number) {
        super(name, hp + 100, attackDamage, armor + 100, "Tank");
    }

    attack(hero: Character) {
        const damage: number = this.getAttackDamage() - hero.getArmor();
        if (damage < 0) {
            hero.takeDamage(0);
        } else {
            hero.takeDamage(damage);
        }
    }
}

class Carry extends Character implements CharacterAttack {

    constructor(name: string, hp: number, attackDamage: number, armor: number) {
        super(name, hp, attackDamage * 1.4, armor, "Carry");
    }

    attack(hero: Character) {
        const damage: number = (this.getAttackDamage() * 2) - (hero.getArmor() - 20);
        if (damage < 0) {
            hero.takeDamage(0);
        } else {
            hero.takeDamage(damage);
        }
    }
}

class Arduin extends Tank {
    constructor() {
        super("arduin", 300, 80, 150);
    }
}

class Bright extends Carry {
    constructor() {
        super("bright", 150, 100, 50);
    }
}

class Elsu extends Carry {
    constructor() {
        super("elsu", 100, 150, 50);
    }

    // override
    attack(hero: Character) {
        const damage: number = (this.getAttackDamage() * 2) - (hero.getArmor() - 100);
        hero.takeDamage(damage);
    }
}


const elsu = new Elsu();
console.log("hero name :: ", elsu.getName(), " HP ", elsu.getHp(), " attack damage :: ", elsu.getAttackDamage());

const arduin = new Arduin();
console.log("hero name :: ", arduin.getName(), " HP ", arduin.getHp(), " attack damage :: ", arduin.getAttackDamage());

// const bright = new Bright();
// console.log("hero name :: ", bright.getName(), " HP ", bright.getHp(), " attack damage :: ", bright.getAttackDamage());
