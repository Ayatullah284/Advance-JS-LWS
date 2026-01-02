

// const processOrder = (customer) => {
//     console.log(`processing order for coustomer 1`);

//     /* var currentTime = new Date().getTime();
//     while(currentTime + 3000 >= new Date().getTime()); */

//     setTimeout(()=> { // web API a kaj chalai
//         console.log(`coooking completed`); 
//     }, 3000);
//     // kaj ses hole callback queue ta thake
//     // Event loop dara callStack a jai

//     console.log(`order processed for customer 1`);
// };


// console.log(`take order for customer 1`);
// processOrder();
// console.log(`completed order for customer 1`);




const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`);

    callback(customer);
}

const processOrder = (customer, callback) => {
    console.log(`processing order for ${customer}`);

    setTimeout(()=>{
        console.log(`cooking completed`);
        console.log(`order processed for ${customer}`);
        callback(customer)
    }, 3000)
}


const completeOrder = (customer) => {
    console.log(`completed order for ${customer}`);
}


takeOrder('customer 1', (customer)=>{
    processOrder(customer, (customer)=>{

        completeOrder(customer)
    });

})
console.log('Hello');