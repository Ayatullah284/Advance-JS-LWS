// memoization in JS

function add(...x){
    return x.reduce((sum, curVal) => sum + curVal);
}

// console.log(add(10));





// HOF & Closure
const memo = (func) => {
    let cache = {};

    return function(...x){
        const key = JSON.stringify(x);
        if(cache[key]){
            return cache[key];
        }else{
            const result = func(...x);
            cache[key] = result;
            return result;
        }
    }
}

const calcuate = memo(add);
console.log(calcuate(10, 20, 30, 40));
console.log(calcuate(10, 20, 30, 40));
console.log(calcuate(20, 20, 30, 40));
console.log(calcuate(10, 20, 30, 40));
console.log(calcuate(10, 20, 30, 40));


