// Day 6: Array

// Activity 1: Array creation and access

// Task 1
const numbers = new Array();
for(let i=1;i<=5;i++){
    numbers.push(i);
}
console.log(numbers);     //output: [1,2,3,4,5]

//Task 2
const first = numbers[0];
const last = numbers[numbers.length -1];
console.log(`first = ${first} last = ${last}`);      //output: first = 1 last = 5

// Activity 2: Array Methods

// Task 3
numbers.push(6);
console.log(numbers);      //output: [1,2,3,4,5,6]

// Task 4
numbers.pop();
console.log(numbers);       //output: [1,2,3,4,5]

// Task 5
numbers.shift();
console.log(numbers);       //output: [2,3,4,5]

// Task 6
numbers.unshift(0);
console.log(numbers);        //output: [0,2,3,4,5]

// Activity 3: Array methods

// Task 7
const double = numbers.map((num)=>{
    return num*2;
});
console.log(double);         //output: [0,4,6,8,10]

//Task 8
const even = numbers.filter((num)=>{
    return num%2 == 0;
});
console.log(even);          //output: [0,2,4]

// Task 9
const sum = numbers.reduce((num1,num2)=>{
    return num1+num2;
}); 
console.log(`sum = ${sum}`);    //output: sum = 14

// Activity 4: Array iteration

// Task 10
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}                                 //output: 0 2 3 4 5

// Task 11
numbers.forEach(element => {
    console.log(element);
});                               //output: 0 2 3 4 5

// Activity 5: Multi-dimensional Array

// Task 12
let row = 3;
let col = 3;
let matrix = [];
for(let i = 0; i<row;i++){
    matrix[i] = [];
    for(let j = 0;j<col;j++){
        matrix[i][j] = i+j;
    }
}
console.log(matrix);            // output:  [[0,1,2],[1,2,3],[2,3,4]]

// Task 13
console.log(matrix[1][2]);       //output: 3

