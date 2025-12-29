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
(function(){
    var nam1 = 2;
    var jog = function(){
      var nam2 = 3;
      return nam1 + nam2;
};

console.dir(jog)
})()

/*
📌 Shortcut মনে রাখার নিয়ম

যে function-এর ভিতরে আরেকটা function লেখা হয়,
সেই বাইরের function-এর scope = enclosing scope

🔥 One-line definition

Enclosing scope = nearest outer scope of a function */


