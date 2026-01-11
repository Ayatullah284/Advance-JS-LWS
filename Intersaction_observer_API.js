/* const circle = document.getElementById('circle');


const observer = new IntersectionObserver((items)=>{
    // console.log(items.isIntersecting);
    items.forEach(item => {
        if(item.isIntersecting){
            console.log(`${item.target} is visible`);
        }else{
            console.log(`${item.target} is not visible`);
        }
    })
}, {
    threshold: 0.5,
});



observer.observe(circle);
 */



const squares = document.querySelectorAll('div');

const observer = new IntersectionObserver((squares)=>{
    squares.forEach(square => {
        if(square.isIntersecting){
            square.target.classList.add('visible');
        }else{
            square.target.classList.remove('visible');
        }
    });
});



squares.forEach(square => observer.observe(square));




