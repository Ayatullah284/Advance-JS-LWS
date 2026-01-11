// Bubbling vs Capturing 


const parent = document.getElementById('parent');
const form = document.getElementById('form');
const button = document.getElementById('button');

parent.addEventListener('click', listener, {
    // event capturing or trickling
    capture: false
});
form.addEventListener('click', listener,true);
button.addEventListener('click', listener);

function listener(event){
    // console.log(event.currentTarget);
    console.log(this);
}



