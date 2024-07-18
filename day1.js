// Activity 1 --> Variable declaration
// Task1  --> Declare a variable using var ,assign it a number, and log the value to console
var num = 1;
console.log("var number: ",num);  //output == var number: 1

// Task2  --> Declare a variable using let ,assign it a string, and log the value to console
let str = "hello, this is day 1 of 30 days of js challenge";  
console.log("let string: ",str);  //output == let string: hello,this is day 1 of 30 days of js challenge

// Activity 2 --> Constant declaration
// Task3  --> Declare a variable using const ,assign it a boolean value, and log the value to console
const bool = true;
console.log("const boolean: ",bool);  //output == const boolean: true

// Activity 3
// Task4  --> Create variables of different data types and log each variable's type using typeof operator
let number1 = 2;
let string1 = "string";
let boolean1 = true;
let object1 = {
    "n1":2,
    "str":"string",
    "b1": true,
};
let array1 = [1,2,3];
let ud = null;
console.log(" number type = ",typeof(number1),
            "\n String type = ",typeof(string1),
            "\n boolean type = ",typeof(boolean1),
            "\n object type = ",typeof(object1),
            "\n array type = ",typeof(array1),
            "\n null type = ",typeof(ud));

// Activity 4
// Task5  --> Declare a variable using let,assign it an initial value, reassign a new value, log both the values to console
let initialVal = 1;
console.log("initial value: ",initialVal);  //output = initial value: 1
initialVal = 2;
console.log("initial value: ",initialVal); //output = initial value: 2

// Activity 5
// Task6 --> try reassigning a variable declared using const and observe the error
const val = "nitika";
console.log("const val: ",val);  //output = const val: nitika
// val = "sheoran";
// console.log(val)  //error  TypeError: Assignment to constant variable
