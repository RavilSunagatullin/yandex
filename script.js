class Hero {
    name;
    surname;
    str;
    agi;
    int;
    ultimate;
    constructor(name, surname, str,agi, int, ultimate) {
        this.name = name;
        this.surname = surname;
        this.str = str;
        this.agi = agi;
        this.int = int;
        this.ultimate = ultimate;
    }
    sayHi(){
        return `I am ${this.name} ${this.surname}`;
    }
    showAbilities(){
        return `Strong:${this.str}, agility: ${this.agi}, intelegent:${this.int},  ultimate:${this.ultimate}`;
    }
}
const strongest = new Hero ('Satoru','Gojo',99,99,99,'Infinity void')
strongest.sayHi();
strongest.showAbilities();