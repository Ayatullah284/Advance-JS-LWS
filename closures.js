/*
var num1 = 2;

var sum = function(){
    var num2 = 3;
    var num = 6;
    return function(){
        return num;
        // return num1 + num2;
    }
};

var myFunc = sum()
console.dir(myFunc)
console.log(myFunc())
console.dir(sum)

// closures = bondoni / bracet 





function bankAccount(intBalance){
    var balance = intBalance;
    return function(){
        return balance;
    }
}

var account = bankAccount(100000);

console.log(account())
console.dir(account) */




// enclosing scopes 
/*
(function(){
    var nam1 = 2;
    var jog = function(){
      var nam2 = 3;
      return nam1 + nam2;
};

console.dir(jog)
})() */

/*
📌 Shortcut মনে রাখার নিয়ম

যে function-এর ভিতরে আরেকটা function লেখা হয়,
সেই বাইরের function-এর scope = enclosing scope

🔥 One-line definition

Enclosing scope = nearest outer scope of a function */



/*
(function (){
    var num1 = 1;
    var num2 = 2;

    var sum = function(){
        return num1 + num2;
    };

    console.log(sum())
    console.dir(sum)


    num1 = 6;
    num2 = 7;

    console.log(sum());
    console.dir(sum);
})(); */










/*
let num1 = 1;
let num2 = 2;

var sum = function(){
    return num1 + num2;
};

console.log(sum())
console.dir(sum) */



/*
(function(){
    let num1 = 1;
    let num2 = 2;

    var sum = function(){
        return num1 + num2;
};

    console.log(sum())
    console.dir(sum)
})(); */




/*
function stopWatch(){
    var startTime = Date.now();

    return function getDelay(){
        console.log(Date.now() - startTime)
    }
};


var timer = stopWatch();


for(var i = 0; i<1000; i++){
    var a = Math.random() * 10000;
}



timer()
console.dir(timer)

timer = null;  */



/*
var a;
function async(){

    a = 20;
    var myFunc = ()=>{
        console.log(a);
    }
    setTimeout(myFunc, 3000)

    console.dir(myFunc)
}

async();
a = 30;

*/


/*
function apiFunction(url){
    fetch(url)
        .then(res => {
            console.log(res) 
        })
}


apiFunction('https://jsonplaceholder.typicode.com/todos/1')


console.log('I am here')  */




for(let i=0; i<3; i++){ 

    const myFunc = ()=>{
        console.log(i)
    }

    console.log(i)
    console.dir(myFunc)
    setTimeout(myFunc, 3000)
        
}


console.log(`after for loop`)


