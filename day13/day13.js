// Acivity 1: Creating and exporting Modules

import {add,student} from "./utility.js";

// Task 1
const result = add(1,2,3);
console.log(result);

// Task 2
const stu_name = student.name;
console.log(stu_name);

// Activity 2: Named and default exports
import mul from "./utility.js";
import{add as addition} from "./utility.js";

// Task 3
const add_result = addition(1,2,3);
console.log(add_result);

// Task 4
const mul_result = mul(2,3,4);
console.log(mul_result);

// Activity 3: importing entire module
import * as utility from "./utility.js";

const modula_result = utility.modulo(8,3);
console.log(modula_result);

// Activity 4: Using Third-Party Modules

// Task 6
// npm install lodash
const _ = require('lodash');
let array = [1, 2, 3, 4];
_.reverse(array);
console.log(array);