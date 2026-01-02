// figher order functions:

/* 
1. fun k parametar hesabe pathano
2. fun return 

2tar ekta thakley HOF  */



/* 
function hello(){
    console.log(`Hello world!`);
}

hello();

hello.language = 'JavaScript';
console.dir(hello) */


/* var a = function hello(){
    console.log(`Hello world`);
};

console.dir(a);
var str = {
    name: 'Bangladesh',
};
console.log(str); */


function hello(){
    return function(){
        console.log(`Hello world!`);
    }
    
}


hello()()