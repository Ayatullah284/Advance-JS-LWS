// 1. varriable nameing






// Default Object Value 
// bad
/* 
const shapeConfig = {
    type: 'circle',
    width: 150,
    height: null
}


function createShape(config){
    config.type = config.type || 'circle';
    config.width = config.width || 300;
    config.height = config.height || 300;
}



createShape(shapeConfig);
 */



//Good 
/* 
const shapeConfig = {
    type: 'circle',
    width: 150
};

function createShape(config){
    config = Object.assign(
        {
            type: 'circle',
            width: 300,
            height: 300,
        },
        config
    );
}
 */



// Prototype pollution 
// bad 
/* Array.prototype.myFunction = function myFunction(){
    //implementation
};

// Good 
class MyArray extends Array{
    myFunc(){
        // implementation
    }
}

 */



// Conditional shorthand 

// bad 
if(isValid === true){
    // do something...
}

if(isValid === false){
    // do something...
}


// Good
if(isValid){
    // do something...
}

if(!isValid){
    // do something...
}