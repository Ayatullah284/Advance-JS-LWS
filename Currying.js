//  Haskell Curry 
/* 
function multiply(a, b, c){
    return a * b * c;
}

console.log(multiply(5, 6, 7));



function curriedMultiply(a){
    return function (b){
        return function (c){
            return a * b * c;
        }
    }
}


console.log(curriedMultiply(5)(6)(7));

let step1 = curriedMultiply(5);
let step2 = step1(6);
let step3 = step2(7);

console.log(step3);
 */


/* 
function discount(discount){
    return (price)=>{
        return price - price * discount;
    };
}

let tenPercentDiscount = discount(0.1); // partial function
let twentyPercentDiscount = discount(0.2);

let customer1D = tenPercentDiscount(600);
let customer2D = tenPercentDiscount(700);
let customer3D = tenPercentDiscount(800);
let customer4D = twentyPercentDiscount(1200);

console.log(customer1D, customer2D, customer3D, customer4D);



// Partial function concept:

 */






// curry converter function:
function curry (func){
    return function  curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args);
        }else{
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

function sum(a, b, c){
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));


