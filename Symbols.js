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



/* var cricket = Symbol.for('This is Cricket Symbol.');
var test = 'testetstestes';

var object = {
    name: 'Sakib',
    [cricket]: 'Bangladesh',
    [test]: 'sghdgsdgsd',
}


console.log(object);

 */



// Symbol are invisible 

/* var object = {};

object.name = 'JavaScript';
object.estd = '1995';

object[Symbol('founder')] = 'Brendan Eich';

console.log(object);

for(let key in object){
    console.log(key);
}
console.log(Object.keys(object)); */









/* var includes = Symbol('my on array includes method');
Array.prototype['includes'] = () => {
    console.log('Ayatullah includes.');
}

var myArray = [1, 2, 3];

console.log(myArray.includes(2));
console.log(myArray["includes"](2));

myArray[includes]

 */


/* 
var title = 'JavaScript';

// 1. title re new String('JavaScript);
// 2. convert parameter 'JavaScript' into RegExp
// 3. RefExp er moddhe Symbol.search() er implementation ashe kina

console.dir(String);

console.log(title.search('Script')) */



/* class Product{
    constructor(title){
        this.title = title;
    }

    [Symbol.search](string){
        return string.indexOf(this.title) >= 0 ? 'Found' : 'Not found';
    }
}

console.log('javascript'.search('script'));
var laptop = new Product('laptop');
console.log('HP laptop'.search(laptop)); */





function myFunc(){
    const PVT = Symbol('my private value');

    return {
        modify(obj){
            obj[PVT] = true;
        },

        output(obj){
            return obj[PVT];
        }
    }
}



const value = myFunc();
const obj = {a: 1, b: 2};

value.modify(obj);
console.log(value.output(obj));


delete obj["Symbol(my private value)"];

console.log(obj);