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

/* 
function hello(){
    return function(){
        console.log(`Hello world!`);
    }
    
}


hello()()


 */






// Without HOF 
/* var numbers = [1, 2, 3];


var res = [];

for (let i = 0; i < numbers.length; i++) {
    var mul = numbers[i] * 2;
    res.push(mul);
    
}

console.log(res);
 */






/* // with HOF
var numbers = [1, 2, 3];

// var result = numbers.map(function(number){
//     return number * 2;

    
// })
var result = numbers.map(number => number * 2);


console.log(result) */






var players = [
    {
        name: 'Sakib',
        avg: 38.23
    },
    {
        name: 'Tamim',
        avg: 36.74
    },
    {
        name: 'Mushfiq',
        avg: 36.78
    },
    {
        name: 'Mahmudullah',
        avg: 37.12
    }
];

var result = players.filter(player => player.avg < 38);

console.log(result)


