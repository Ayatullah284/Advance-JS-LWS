const button = document.getElementById('button');

// normal:
/* let timerId;
function debounce(){

    clearTimeout(timerId);
    timerId = setTimeout(()=>{
        console.log('Clicked');
    }, 1000);

}

button.addEventListener('click', debounce); */








function debounce2(fun, delay){

    let timerId;
    return ()=>{
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fun();
        }, delay);
    }
}


button.addEventListener('click', debounce2(()=>{
    console.log('Clicked......');
}, 1000));




// Debounce = bounce thekano 



