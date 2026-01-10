//  Haskell Curry 

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


