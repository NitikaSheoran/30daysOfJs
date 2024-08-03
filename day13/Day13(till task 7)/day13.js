// Acivity 1: Creating and exporting Modules

import {add,student} from "./utility.js";
import mul from "./utility.js";
import{add as addition} from "./utility.js";
import * as utility from "./utility.js";

// Task 1
const result = add(1,2,3);
console.log(result);
// output: 6

// Task 2
const stu_name = student.name;
console.log(stu_name);
console.log(student);
// output: Nitika
// {name: 'Nitika', dept: 'CSE', year: '2nd',sgpa()}


// Activity 2: Named and default exports

// Task 3
const add_result = addition(1,2,3);
console.log(add_result);
//output: 6

// Task 4
const mul_result = mul(2,3,4);
console.log(mul_result);
// output:24

// Activity 3: importing entire module

// Task 5
const modula_result = utility.modulo(8,3);
console.log(modula_result);
// output: 2

// Activity 4: Using Third-Party Modules

// Task 6
// npm install lodash
// const _ = require('lodash');
let array = [1, 2, 3, 4];
_.reverse(array);
console.log(array);
// output: [4,3,2,1]

// Task 7
// npm install axios
// const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  // output:   {userId: 1, id: 1, title: 'delectus aut autem', completed: false}

// Task 8 in webpack-demo folder(task 8: use a module bundler like webpack to bundle javascript files into a single file. write a script to demonstrate the bundling process)