// Event Loop   
/* 
Heap memory
Call stack 
Web API 
Callback Queue 
Event Loop
 */



const second = () => console.log('I am second');
const third = () => console.log('I am third');

const first = () => {
    console.log('I am first');

    setTimeout(second, 0);
    third();
};

first();