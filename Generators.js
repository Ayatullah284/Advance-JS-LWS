/* let numbers = [1, 2, 3];
let iterator = numbers[Symbol.iterator]();


console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

 */



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


