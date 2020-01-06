var animalPopulation=0;
class Shape {

    constructor(name) {
        this.name = name;
        this.special = true;
    }

    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    sayHistory() {
        console.log("Shapes have a wonderful history.");
    }
}
class Polygon extends Shape {

    constructor(height, width) {
        super('Polygon');
        this.height = height;
        this.width = width;
    }

    //function #2
    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).');
    }

}

var p1 = new Polygon(20, 40);
var shape1 = new Shape("bob");



// function eat(name,food){
//     console.log(name+" eats "+food);
//     if(food==favoriteFood){
//         console.log("YUMM!! "+name+" wants more "+favoriteFood)
//     }else{
//         sleep("Tigger")
//     }
// }

// function sleep(name){
//     console.log(name +" sleeps for 8 hours")
// }

class Animal {

    constructor(name,favFood) {
        this.name=name;
        this.favoriteFood= favFood
        animalPopulation++
    }

    sleep() {
        console.log(this.name +" sleeps for 8 hours")
    }

    eat(food) {
        console.log(this.name+" eats "+food);
        if(food==this.favoriteFood){
            console.log("YUMM!! "+this.name+" wants more "+this.favoriteFood)
        }else{
            this.sleep()
        }
    }
    static getPopulation(){
        console.log (animalPopulation);
    }
}

class Tiger extends Animal {

    constructor(name) {
        super(name,"meat")
    }

}

class Bear extends Animal{

    constructor(name) {
        super(name,"fish")
    }

    sleep() {
        console.log(this.name +" hibernates for 4 months")
    }

}

class Unicorn extends Animal {

    constructor(name) {
        super(name,"marshmallows")
    }

    sleep() {
        console.log(this.name +" sleeps in a cloud")
    }
}
class Giraffe extends Animal {

    constructor(name) {
        super(name,"leaves")
    }
    eat(food){
        if(food==this.favoriteFood){
            super.eat("leaves");
            this.sleep()
        }else{
            console.log("YUCK!!! "+this.name+" will not eat "+ food)
        }
    }
}
class Bee extends Animal {

    constructor(name) {
        super(name,"pollen")
    }
    sleep(){
        console.log(this.name+" never sleeps")
    }
    eat(food){
        if(food==this.favoriteFood){
            super.eat("pollen");
            this.sleep()
        }else{
            console.log("YUCK!!! "+this.name+" will not eat "+ food)
        }
    }
}




var Tigger= new Tiger("Tigger");
var Pooh= new Bear("Pooh");
var Gemma= new Giraffe("Gemma");
var Rarity= new Unicorn("Rarity");
var Stinger=new Bee("Stinger");
var animals=[Tigger,Pooh,Gemma,Rarity,Stinger];
class Zookeeper{
    constructor(name){
        this.name=name;
    }
    feedAnimals(animals,food){
        console.log(this.name+" is feeding "+food+" to "+animals.length+" of "+animalPopulation +" animals.");
        for(var i = 0; i<animals.length; i++){
            animals[i].eat(food)
        }
    }
}

var Zoebot= new Zookeeper("Zoebot");
function run(){
    // Tigger.eat("meat");
    // Pooh.eat("fish");
    // Pooh.eat("meat");
    // Rarity.eat("marshmallows");
    // Rarity.sleep();
    // Gemma.eat("meat");
    // Gemma.eat("leaves");
    // Stinger.eat("ice cream");
    // Stinger.eat("pollen");
    Zoebot.feedAnimals(animals,"meat");
    Animal.getPopulation();
}
