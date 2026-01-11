

const worker = new Worker('worker.js');

const totalButton = document.getElementById('total');
const bgButton = document.getElementById('bg');


totalButton.addEventListener('click', ()=>{
    /* let total = 0;
    for(let i = 0; i < 10000; i++){
        total += i;
    }

    console.log(`The total is ${total}`); */

    worker.postMessage('Hello worker! Please do the work for me.');
});


worker.onmessage = function(message){
    console.log(`The total is ${message.data}`);
}

bgButton.addEventListener('click', ()=>{
    if(document.body.style.background !== 'green'){
        document.body.style.background = 'green';
    }else{
        document.body.style.background = 'blue';
    }
})



