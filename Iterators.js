let array = ['A', 'B', 'C'];
let name = 'JavaScript';

/* for(let i = 0; i < array.length; i++){
    console.log(array[i]);
} */
/* for(let element of array){
    console.log(element);
} */
/* for(let element of name){
    console.log(element);
} */
console.dir(array);



let object = {
    cowboy: 'A',
    nerd: 'B',
    smiling: 'C',
};
/* let entries = Object.entries(object);

for(let i = 0; i < entries.length; i++){

    console.log(entries[i][1]);
} */

/*     for(let element of object){
        console.log(element)
    } */
console.dir(object);














// Iterable  Protocol:

// 1. Symbol.iterator  (function) 
// 2. return an iterator



let arr = ['M', 'N', 'O'];
let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());




// Iterator protocol:

// 1. Object
// 2. next()
// 3. next() must return an object with done:Boolean and a value






/* console.log([...'hello']);

String.prototype[Symbol.iterator] = function () {
    let count = this.length;

    return {
        next() {
            if(count > 0){
                count --;
                return {done: false, value: 'JS'}
            }
            return {done: true};
        }
    };
};


console.log([...'ayatullah']); */







function range(start, end, step){
    let current = start;
    return {
        [Symbol.iterator]: function(){
            return {
                next(){
                    let result;
                    if(current <= end){
                        result = {
                            done: false,
                            value: current
                        };
            
                        current += step;
                        return result;
                    }
                    return {
                    done: true,
                    };
                }
            }
        }
    }
}



console.log([...range(1, 30, 2)]);



