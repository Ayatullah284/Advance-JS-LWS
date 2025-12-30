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





function Person(name, age){
    let person = {};

    person.name = name;
    person.age = age;

    person.eat = function(){
        console.log(`Person is eating....`)
    }

    person.sleep = function(){
        console.log(`Person is sleeping....`)
    }



    return person;
}