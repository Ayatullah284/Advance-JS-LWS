
//  1 + 2 + 3 + ........ + navigator;

/* 
let total = 0;
let n = 10;

for(let i=1; i<=n; i++){
    total += i;
}

console.log(total)

 */



// f(n-1) + n = f(n)


function sum(n){
    if(n == 0){
        return 0
    }else{
        return sum(n-1) + n;
    }
    
}


const result = sum(10);
console.log(result);


/* 
9 + 10
8 + 9
7 + 8
6 + 7
5 + 6
4 + 5
3 + 4
2 + 3
1 + 2
0 + 1
 */

