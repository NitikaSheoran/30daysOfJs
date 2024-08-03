// Activity 1: Basic Error Handling with try and catch
//Task 1

function throw_error(){
    throw new Error("This function throws an error");
};

try {
    throw_error();
} catch (error) {
    console.log('The error is:',error.message);
}
//The error is: This function throws an error

//Task 2 

function divide(){
    const a=20;
    const b=0;
    if (b==0){
        throw new Error('ZERO DIVISION ERROR');
    }
    else{
        return (a/b);
    }
}

try {
    divide();
    
} catch (error) {
    console.log(error.message);
}
//ZERO DIVISION ERROR


// Activity 2: Finally Block
//Task 3 

try {
    console.log('try block');
    divide();
} catch (error) {
    console.log('catch block');
    console.log(error.message);
}
finally{
    console.log('finally block');
}

// try block
// catch block
// ZERO DIVISION ERROR
// finally block


// Activity 3: Custom Error Objects
//Task 4
class Zero_Division_Error extends Error {
    constructor(message){
        super(message);
        this.name = "ZeroDivisionError"; 
    }
}
function divide2() {
    let a = 15;
    let b = 0;

    if (b === 0){
        throw new Zero_Division_Error('ZERO DIVISION ERROR');
    }else{
        return a / b;
    }
}
try {
    let result = divide2();
    console.log("Result:", result);
} catch (error) {
    if (error instanceof Zero_Division_Error) {
        console.error(`Caught a custom error: ${error.name} - ${error.message}`);
    } else {
        console.error(`Caught an unexpected error: ${error.message}`);
    }
}
//Caught a custom error: ZeroDivisionError - ZERO DIVISION ERROR

//Task 5 

class ValidationError extends Error {
    constructor(message) {
        super(message); 
        this.name = "ValidationErrorOccured"; 
    }
}
function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationError('Input cannot be an empty string or non-string value');
    }
    return "Input is valid!";
}
try {
    const userInput = '';
    const result = validateInput(userInput);
    console.log(result);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Caught a validation error: ${error.name} - ${error.message}`);
    } else {
        console.error(`Caught an unexpected error: ${error.message}`);
    }
}
//Caught a validation error: ValidationErrorOccured - Input cannot be an empty string or non-string value

// Activity 4: Error Handling in Promises
//Task 6 
function promise(){
    return new Promise((resolve,reject)=>{
        let random = Math.random();
        if(random >= 0.5){
            resolve("succesfully resolved the promise");
        }else{
            reject(new error("promise rejected"));
        }
    });
};
promise().then((msg)=>{
    console.log("Promise resolved with: ",msg);
})
.catch((error)=>{
    console.log("Promise rejected with: ",error.message);
});

//Promise rejected with: promise rejected
//Promise resolved with: succesfully resolved the promise

//Task 7 

async function async_promise_handle() {
    try {
        const result = await promise();
        console.log("Promise resolved with:", result);
    } catch (error) {
        console.log("Promise rejected with:", error.message);
    }
}
async_promise_handle();
// output:
// Promise rejected with: promise rejected
// Promise resolved with: succesfully resolved the promise


// Activity 5: Graceful Error Handling in Fetch
//Task 8 
const src='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2024-02-26/currencies/eur.json';

const fetchData = () => {
    return new Promise((resolve, reject) => {
        fetch(src)
            .then(response => {
                if (!response.ok) {
                    reject(new Error(`HTTP error! status: ${response.status}`));
                } else {
                    response.json().then(data => resolve(data));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(error => console.log(error));
//Error: HTTP error! status: 404

//Task 9

const currency_convert=async()=>{
    try{
        let response=await fetch(src);
        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }       
};
currency_convert();
// output 
// Error: HTTP error! status: 404