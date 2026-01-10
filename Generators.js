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



/* 
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

 */





let object = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
}


// console.log(Object.entries(object));
/* Object.prototype[Symbol.iterator] = function(){
    const entries = Object.entries(this);
    let count = entries.length;
    let index = 0;

    return {
        next(){
            if(count > 0){
                let result = {done: false, value: entries[index][1]};
                count--;
                index++;
                return result;
            }
            return {done: true};
        }
    }
} */


// console.log(Object.entries(object));  [
/*  
[
 ['value1', 1],
 ['value2', 2],
 ['value3', 3],
 ['value4', 4],
 ['value5', 5]
]

 */

/* function *generator(obj){
    const entries = Object.entries(obj);
    for(let element of entries){
        yield element[1];
    }
}

const iterator = generator(object);

for(let element of iterator){
    console.log(element);
} */
// console.log([...object]);



/* 
function *range(start, end, step){

    let current = start;

    while(current <= end){
        yield current;
        console.log('did u execute?')
        current += step;
    }
}


var iterator = range(1, 1000, 2);
console.log(iterator.next());
console.log(iterator.next());
 */




/* function *generator(a, b){
    let k = yield a + b;
    let m = yield a + b + k;

    yield a + b + k + m;
}


var gen = generator(10, 20);

console.log(gen.next());
console.log(gen.next(50));
console.log(gen.next(100));
 */







/* 
const takeOrder = (customer) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`order take from ${customer}`);
        }, 1000);
    })
    
};

const processOrder = (customer) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`order processed for ${customer}`);
    }, 2000);  
    })
    
};

// [Symbol.asyncIterator]()
const completeOrder = (customer) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`order completed for ${customer}`);
    }, 1000);  
    })
    
};


async function *solution(customer){
    yield await takeOrder(customer);
    yield await processOrder(customer);
    yield await completeOrder(customer);
}

const gen = solution('Karim');

// gen.next().then(({value}) => console.log(value));
// gen.next().then(({value}) => console.log(value));
// gen.next().then(({value}) => console.log(value));

const promises = [gen.next(), gen.next(), gen.next()];

(async function () {
    for await (let p of promises){
        console.log(p);
    }
})();

 */





const myAsyncIterable = {
    async *[Symbol.asyncIterator](){
        yield 'hello';
        yield 'async';
        yield 'iterator';
    }
};


(async () => {
    for await (let x of myAsyncIterable){
        console.log(x);
    }
})();


