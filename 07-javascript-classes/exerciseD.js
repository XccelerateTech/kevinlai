class Monster {

    constructor(option) {
        this.name = option.name;
        this.health = 100;
    }

    wound(damage) {
        if (this.health > 0){
            console.log(this.health);
            console.log('damage is ' + damage);
            this.health -= damage;
            if (this.health <= 0){
                console.log(this.health);
                return console.log('monster dead');
             }
            } 

    }

    hero(){
        while (this.health > 0) {
            var hurt = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            this.wound(hurt);
            console.log(this);
        }
    }
}

const monster1 = new Monster({name: 'Alien'});
const monster2 = new Monster({name: 'Godzilla'});
monster1.hero();

function attack(monster) {
    monster
}