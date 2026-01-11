const list = document.getElementById('list')


list.addEventListener('click', (e)=>{
    if(e.target.matches('li')){

        // e.target.style.backgroundColor = 'yellow';
        // console.dir(e.target.innerText); 


        if(e.target.innerText === 'JavaScript'){
            e.target.style.backgroundColor = 'yellow';
        }else if(e.target.innerText === 'PHP'){
            e.target.style.backgroundColor = 'green';
        }else if(e.target.innerText === 'Java'){
            e.target.style.backgroundColor = 'blue';
        }else if(e.target.innerText === 'Python'){
            e.target.style.backgroundColor = 'red';
        }else if(e.target.innerText === 'TypeScript'){
            e.target.style.backgroundColor = 'pink';
        }else{
            e.target.style.backgroundColor = 'gray';
        }
    }
    
})


function addElement(){
    const newElement = document.createElement('li');
    newElement.textContent = 'Dot net';
    list.appendChild(newElement);
}



