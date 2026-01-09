/* let numbers = [1, 2, 3];
let iterator = numbers[Symbol.iterator]();


console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

 */


/* 
function *generator(){
    yield 1;
    yield 2;
    return 'I am finished';
    yield 3;
    yield 4;
}


let iterator = generator();


console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
 */




function *myGenerator(){};
function* myGenerator(){};
function * myGenerator(){};



const myGenerator = function* () {};

// let generator = *() => {};  // X not use for arrow funtion


class myClass{
    *myGenerator(){};
}

const myObject = {
    *myGenerator(){}
}