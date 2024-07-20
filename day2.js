// DAY2: Operators

// Activity 1: Arithmetic operations

// Task 1 : Write a program to add two numbers and log the result to the console.
let number1 = 8;
let number2 = 2;
console.log("add:  ",number1," + ",number2," = ",number1+number2);  //output: add: 8 + 2 = 10

// Task 2 : Write a program to subtract two numbers and log the result to the console.
console.log("subtraction: ",number1," - ",number2," = ",number1-number2); //output: subtraction: 8 - 2 = 6

// Task 3 : Write a program to multiply two numbers and log the result to the console.
console.log("multiplication: ",number1," * ",number2," = ",number1*number2); //output: multiplication: 8 * 2 = 16

// Task 4 : Write a program to divide two numbers and log the result to the console.
console.log("Division: ",number1," / ",number2," = ",number1/number2);  //output: Division: 8 / 2 = 4

// Task 5 : Write a program to find the remainder when one number is divided by another number and log the result to the console.
console.log("remainder: ",number1," % ",number2," = ",number1%number2);  //output: remainderL 8 % 4 = 0


// Activity 2 : Assignment Operators

// Task 6 : Use the += operator to add a number to a variable and log the result to the console
// addition assignment operator
let a = 3;
a += 5;  // a = a + 5
console.log("Addition Assignment: a += 5, a =", a); //output: Addition Assignment: a += 5, a = 8

// Task 7 : Use the -= operator to add a number to a variable and log the result to the console
// subtraction assignment operator
a -= 5;  // a = a - 5
console.log("Subtraction Assignment: a -= 5, a =", a); //output: Subtraction Assignment: a -= 5, a = 3


// Activity 3 : Comparison Operators

// Task 8 : Write a program to compare two numbers using > and < and log the result to console
// greater than operator >
console.log("Greater than: 3 > 5 is", 3 > 5);  //output: Greater than: 3 > 5 is false
// less than operator
console.log("Less than: 3 < 5 is", 3 < 5);  //output: Less than: 3 < 5 is true


// Task 9 : Write a program to compare two numbers using >= and <= and log the result to console
// greater than equal to operator >
console.log("Greater than equal to : 3 >= 5 is", 3 >= 5);  //output: Greater than equal to : 3 >= 5 is false
// less than equal to operator
console.log("Less than equal to : 5 <= 5 is", 5 <= 5);  //output: Less than equal to : 5 <= 5 is true


// Task 10 : Write a program to compare two numbers using == and === and log the result to console
// equal to operator >
console.log("Greater than equal to : 3 == 3 is", 3 == 3);  //output: Greater than equal to : 3 == 3 is true
// strictly equal to operator
console.log("Less than equal to : 5 === '5'  is", 5 === '5');  //output: Less than equal to : 5 === '5'  is false


// Activity 4: Logical Operators

// Task 11 : Write a program that uses && operator to combine two conditions and log the result to console
const n1 = 10, n2 = 3;
console.log((n1 < 9) && (n2 < 5)); // Output: false

// Task 12 : Write a program that uses || operator to combine two conditions and log the result to console
console.log((n1 < 9) || (n2 < 5)); // Output: true

// Task 13 : Write a program that uses ! operator to negate a condition and log the result to console
console.log(!(n1==10)); // Output: false

// Activity 5: Ternary Operator


// Task 14 : Write a program that uses ternary operator to check if a number is positive or negative and log the result to console
n1>0 ? console.log(n1,"is +ve") : console.log(n1,"is -ve");  //output: 10 is positive


// Feature request
// 1. Arithmetic operations script

let n = 5;

// addition operator
console.log("Addition: n + 3 = ", n + 3);

// subtraction operator
console.log("Subtraction: n - 3 =", n - 3);

// multiplication operator
console.log("Multiplication: n * 3 =", n * 3);

// division operator
console.log("Division: n / 3 =", n / 3);

// remainder operator
console.log("Remainder: n % 3 =", n % 3);

// increment operator
console.log("Increment: ++n =", ++n);

// decrement operator
console.log("Decrement: --n =", --n);

// exponentiation operator
console.log("Exponentiation: n ** 3 =", n ** 3);

//output
// Addition: n + 3 =  8
// Subtraction: n - 3 = 2
// Multiplication: n * 3 = 15
// Division: n / 3 = 1.6666666666666667
// Remainder: n % 3 = 2
// Increment: ++n = 6
// Decrement: --n = 5
// Exponentiation: n ** 3 = 125


// 2. Comparison and logical operators script

// equal to operator
console.log("Equal to: 3 == 3 is", 3 == 3);

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === '2');

// greater than operator
console.log("Greater than: 3 > 5 is", 3 > 5);

// less than operator
console.log("Less than: 3 < 5 is", 3 < 5);

// output
// Equal to: 3 == 3 is true
// Not equal to: 3 != 3 is false
// Strictly equal to: 2 === '2' is false
// Greater than: 3 > 5 is false
// Less than: 3 < 5 is true

// logical AND
console.log((n < 5) && (n > 0));  // false

// logical OR
console.log((n > 2) || (n > 5));  // true

// logical NOT
console.log(!(n == 3));  // true


// 3. ternary operator script
n1>0 ? console.log(n1,"is +ve") : console.log(n1,"is -ve");  //output: 10 is positive