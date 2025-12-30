// Multi line: Shift + Alt + A

/* let person = {};

person.name = 'Jasim';
person.age = 30;

person.eat = function(){
    console.log(`Person is eating....`)
}

person.sleep = function(){
    console.log(`Person is sleeping....`)
} */












/* function Person(name, age){
    // let this = Object.create(PersonWithNew.prototype);
    this.name = name;
    this.age = age;

    // return this;
}

Person.prototype = {
    eat(){
        console.log(`Person is eating`)
    },
    sleep(){
        console.log(`Person is sleeping...`);
    },
    play(){
        console.log(`Person is playing...`);
    }
}

// const sakib = Person("sakib", 35);
// sakib.play()
// const tamim = Person("Tamim", 35);
// console.dir(Person)
// const sakib = new Person("sakib", 35);
// const tamim = new Person("Tamim", 35);

const sakib = new Person("sakib", 35);
sakib.play();
const tamim = new Person("Tamim", 35); */










/* const captain = {
    name: "Mashrafi",
    age: 36,
    country: "Bangladesh"
};

const player = Object.create(captain);


console.log(player)
console.log(player.name) */


/* 
function test(){};

console.dir(test.prototype) */








class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`Person is eating`);
    }

    sleep(){
        console.log(`Person is sleeping`);
    }

    play(){
        console.log(`Person is playing`);
    }
}


const sakib = new Person('Sakib', 35);
const tamim = new Person('Tamim', 35);

sakib.play();