const result = 'Sumit' / 5;
console.log(typeof result, result);



const weird = NaN;
console.log(weird === weird);


const result1 = 'Sumit' / 5;
const result2 = 'Bad programmer' / 3;
console.log(result1 === result2);




const array = [NaN];
const result3 = array.includes(NaN);
console.log(result3);


// ==
// ===
// Object.is()
// Same_value_zero equality


const sameValueZero = (a, b) => {
    if(a===b || (Number.isNaN(a) && Number.isNaN(b))) {
        return true;
    }

    return false;
};


