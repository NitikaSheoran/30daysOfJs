// Day 5: Functions

// Activity 1:Function declaration
// Task 1

function odd_even(num){
    if(num%2 == 0){
        return "even";
    }else{
        return "odd";
    }
}

let num = 5;
console.log(odd_even(num));               //output: odd

// Task 2

function square(num){
    return num*num;
}

num = 5;
console.log(square(num));                   //output: 25


// Activity 2: Function Expression

// Task 3

function max(num1 , num2){
    if(num1 > num2){
        console.log(`${num1} is greater`);
    }else if(num1 == num2){
        console.log("numbers are equal");
    }else{
        console.log(`${num2} is greater`);
    }
}

max(5,8);                                    //output: 8 is greater

// Task 4

function concat(str1 , str2){
    return str1+" "+str2;
}
let str1 = "hello";
let str2 = "world";
let result = concat(str1,str2);
console.log(result);                           //output: hello world


// Activity 3: Arrow function

// Task 5

let sum = (a,b)=>{
    return a+b;
}
let result1 = sum(5,3);
console.log(`sum: ${result1}`);                   //output: sum: 8

// Task 6

let includes = (str,ch)=>{
    return str.includes(ch);
}

console.log(includes("hello",'l'));                //output: true

// Activity 4: Function Parameters and Default Values

// Task 7
function product(a,b=1){
    return a*b;
}
let a = 5;
let b = 3;
console.log(`product: ${product(a,b)}`);             //output: product: 15

// Task 8
function greetings(name,age=18){
    return `name:  ${name}, age: ${age}`;
}
console.log(greetings("abc",20));                 //output: name: abc, age: 20 


// Activity 5: Higher-Order Functions

// Task 9

function repeat(function1,n){
    for(let i=0;i<n;i++){
        function1();
    }
}

function hello(){
    console.log("hello! ");
}
repeat(hello,5);                                 //output: hello! hello! hello! hello! hello!


// Task 10

function high_order_function(func1 ,func2, val){
    return func2(func1(val));
}

function func1(val){
    return val*2;
}
function func2(val){
    return val*val;
}

console.log(high_order_function(func1,func2,10));     //output: 400

