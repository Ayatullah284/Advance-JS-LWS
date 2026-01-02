

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




/* const takeOrder = (customer, callback) => {
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
console.log('Hello'); */



/* 
  const hasMeeting = false;

  const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        };

        resolve(meetingDetails);
    }else{

        reject(new Error('meeting already scheduled!'));

    }
  })

/*   const addToCalendar = (meetingDetails) => {
    return new Promise((resolve, reject) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        resolve(calendar);
    })
  } */


/*
  const addToCalendar = (meetingDetails) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calendar);
    
  }


  meeting
    .then(addToCalendar)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })

    console.log('Hello') */




  /*   const promise1 = Promise.resolve(`Promise 1 resolved`);

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise 2 resolved`);
        }, 2000);
    });

    // promise1.then((res) => console.log(res));
    // promise2.then((res) => console.log(res));

    // Promise.all([promise1, promise2])
    //     .then(res => {
    //         console.log(res);

    //     });
    Promise.race([promise1, promise2])
        .then(res => {
            console.log(res);

        }); */








const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        };

        resolve(meetingDetails);
    }else{

        reject(new Error('meeting already scheduled!'));

    }
  })



const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calendar);
    
  }


async function MyMeeting() {
    try{
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar) 

    }catch{
        console.log(`somthing wrong happend.`)
    }
    
}


MyMeeting();
console.log('hello world')