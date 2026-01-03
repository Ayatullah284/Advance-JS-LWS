/* var a = 5;
var b = a;
a = 6; */




/* 
var a = {
    name: 'Sakib'
}
var b = a;
a.name = 'Tamim';
 */


/* 
var a = ['Sakib', 'Tamim'];
var b = a;

a.push('Mahmudullah');

console.log(a);
console.log(b);

 */



/* 
// Primitive value : stack 
string 
Number 
Boolean 
null 
undefined 
Symbol
 */



// Reference Values: heap, stack (meutation)
/* 
Object 
Array 
Function 
Date 
. 
. 
. 
. 
 */




// Mutetion vs Assignment 

/* var a = ['Sakib', 'Tamim'];
var b = a;

// a.push('Mahmudullah'); // change/mutate
a = [];

console.log(a)
console.log(b)


a = {}

console.log(a);

 */



var language = {
    name: 'JavaScript',
    estd: '1995',
}

// var language2 = language; // mutabl
var language2 = {...language}; // immutably
language.founder = 'Brendan Eich';

// Immutably = change na kore

console.log(language);
console.log(language2);

