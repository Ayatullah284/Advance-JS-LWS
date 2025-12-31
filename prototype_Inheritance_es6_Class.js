/* var f = function Person(){}



console.dir(f);

Object.prototype.Ayatullah = function(){
    console.log('I am Ayatullah.')
}


var p = {};


p.Ayatullah();


 */



/* function Person(name, age){
    this.name = name;
    this.age = age;

}

function Cricketer(name, age, type, country){
    Person.call(this)

    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat: function(){
        console.log(`${this.name} is eating`);
    }
}


Cricketer.prototype = Object.create(Person.prototype)
Cricketer.prototype.constructor = Cricketer;
Cricketer.prototype.play = function(){
    console.log(`${this.name} is playing`)
}


let sakib = new Cricketer("Sakib", 35, 'All rounder', "Bangladesh");
console.log(sakib.eat())

 */


class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Cricketer extends Person {
    constructor(name, age, type, country){
        super(name, age)
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }

    play(){
        console.log(`${this.name} is playing`)
    }
}


let sakib = new Cricketer('Sakib', 35, 'All-Rounder', 'Bangladesh')
sakib.eat()
sakib.play()





