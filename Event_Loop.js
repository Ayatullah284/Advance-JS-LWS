// Event Loop   
/* 
Heap memory
Call stack 
Web API 
Callback Queue 
Event Loop
 */



// Async Timer: 
/* const second = () => console.log('I am second');
const third = () => console.log('I am third');

const first = () => {
    console.log('I am first');

    setTimeout(second, 0);
    third();
};

first(); */





// Sync blocking code: 
/* function process(num){
    // process heavy sync task:

    console.log(num);
}


[1, 2, 3, 4, 5].forEach(i => {
    process(i);
})  */



// Promise a event loop:
const second = () => console.log('second');
const third = () => console.log('third');

const first = () => {
    console.log('first');
    setTimeout(second, 0);

    new Promise((resolve, reject) => {
        resolve('I am rigth after third, before second');
    }).then(resolve => console.log(resolve));
    third();

}



first();



// Microtask Queue 
// Callback Queue

// promise chole jai Microtask queue te 




