// Symboles in JavaScript:

// Symbol is primitive data type 



/* var symbl1 = Symbol('I am Symbol 1');
var symbl2 = Symbol('I am Symbol 2');
var symbl3 = Symbol();
var symbl4 = Symbol();



console.log(symbl1);
console.log(symbl2); */




/* var name = new Symbol();  //error
console.log(name); // Symbol is not a constructor */

// protita symbol alada uniqe id 

/* var nam = Symbol();
console.log(nam); 


var symbl1 = Symbol.for('I am Symbol 1');
var symbl2 = Symbol.for('I am Symbol 1');
console.log(symbl1 == symbl2, symbl1 === symbl2) // true */



var cricket = Symbol.for('This is Cricket Symbol.');
var test = 'testetstestes';

var object = {
    name: 'Sakib',
    [cricket]: 'Bangladesh',
    [test]: 'sghdgsdgsd',
}


console.log(object);

