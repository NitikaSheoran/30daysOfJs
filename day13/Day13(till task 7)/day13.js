// Acivity 1: Creating and exporting Modules

import {add,student} from "./utility.js";
import mul from "./utility.js";
import{add as addition} from "./utility.js";
import * as utility from "./utility.js";
// Task 1
const result = add(1,2,3);
console.log(result);

// Task 2
const stu_name = student.name;
console.log(stu_name);
console.log(student);

// Activity 2: Named and default exports

// Task 3
const add_result = addition(1,2,3);
console.log(add_result);

// Task 4
const mul_result = mul(2,3,4);
console.log(mul_result);

// Activity 3: importing entire module
const modula_result = utility.modulo(8,3);
console.log(modula_result);

// Activity 4: Using Third-Party Modules

// Task 6
// npm install lodash
// const _ = require('lodash');
let array = [1, 2, 3, 4];
_.reverse(array);
console.log(array);

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
