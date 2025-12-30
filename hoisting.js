/*
var a;
console.log(a)


a = "Bangladesh"
console.log(a) */


/*
console.log(a)

var a = "Bangladesh"; */





let LANGUAGE = 'Java';
let language = 'JavaScript';

function getLanguage(){
    if(!language){
        var language = LANGUAGE; //importent line
        console.log('condition In = ', language)
    }
    console.log('condition Out = ', language)
    return language;
}


console.log(`I love ${getLanguage()}`)