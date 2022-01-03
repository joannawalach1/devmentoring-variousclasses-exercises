class Cat {
    constructor(name, level_hunger, level_happinnes, level_loneliness) {
        this.name = name;
        this.level_hunger = level_hunger;
        this.level_happinnes = level_happinnes;
        this.level_loneliness = level_loneliness;
    }
    introduce() {
        console.log(`${this.name} ${this.level_hunger} ${this.level_happinnes} ${this.level_loneliness}`);
    }

    feed(hunger) {
        this.level_hunger += hunger;
    }
    play(hapinness) {
        this.level_happinnes += hapinness;
    }
    meet(loneliness) {
        this.level_loneliness += loneliness;
    }
    info(name) {
        if ((this.level_hunger > 0) && (this.level_hunger < 10)) {
            console.log(`${this.name} is very hungry`)
        } else if ((this.level_hunger > 10) && (this.level_hunger < 30)) {
            console.log(`${this.name} is a bit hungry`)
        } else if (this.level_hunger > 30) {
            console.log(`${this.name} is not hungry`)
        };

        if ((this.level_happinnes > 0) && (this.level_happinnes < 10)) {
            console.log(`${this.name} is not happy`)
        } else if ((this.level_happinnes > 10) && (this.level_happinnes < 30)) {
            console.log(`${this.name} is a bit happy`)
        } else if (this.level_happinnes > 30) {
            console.log(`${this.name} is very happy`)
        };

        if ((this.level_loneliness > 0) && (this.level_loneliness < 10)) {
            console.log(`${this.name} is not lonely`)
        } else if ((this.level_loneliness > 10) && (this.level_loneliness < 30)) {
            console.log(`${this.name} is a bit lonely`)
        } else if (this.level_loneliness > 30) {
            console.log(`${this.name} is very lonely`)
        };
    }

};

myCat = new Cat('Pusia', 20, 10, 2);
myCat.introduce();
myCat.feed(10);
myCat.play(5);
myCat.meet(5);
myCat.introduce();
myCat.feed(5);
myCat.play(5);
myCat.meet(5);
myCat.introduce();
myCat.info();

myCat = new Cat('Fiki', 30, 30, 30);
myCat.introduce();
myCat.feed(6);
myCat.play(10);
myCat.meet(4);
myCat.introduce();
myCat.feed(5);
myCat.play(5);
myCat.meet(3);
myCat.introduce();
myCat.info();



