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


const personMethods = {
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


function Person(name, age){
    let person = {};

    person.name = name;
    person.age = age;

    person.eat = personMethods.eat;
    person.sleep = personMethods.eat;
    person.play = personMethods.play;

    return person;
}

const sakib = Person("sakib", 35);
const tamim = person("Tamim", 35);