// Activity 1: Basic Regular Expressions
// Task 1
let regex = /javascript/g;
let str = "This is a javascript line with javascript appearing javascript three times.";
console.log(str.match(regex));
// output: [ 'javascript', 'javascript', 'javascript' ]


// Task 2
regex = /[0-9]/g;
str = "regular xpression to match digits eg 1,2,3,12,99 etc";
console.log(str.match(regex));
// output: ['1', '2', '3','1', '2', '9','9']


// Activity 2: Character Classes and Quantifiers
// Task 3
regex = /\b[A-Z][a-z]*/g;
str = "Hello, this is regular Expression to match Words starting with Capital letters";
console.log(str.match(regex));
// output: [ 'Hello', 'Expression', 'Words', 'Capital' ]


// Task 4
regex = /\b[0-9]+/g;
str = "10 9 8 99";
console.log(str.match(regex));
// output: [ '10', '9', '8', '99' ]


// Activity 3: Grouping and Capturing
// Task 5
regex = /^(?:\+1\s?)?(\(?\d{3}\)?[-.\s]?)?(\d{3})[-.\s]?(\d{4})$/;
str = "(123) 456-7890";
console.log("Area code: "+str.match(regex)[1]);
console.log("Central office code: "+str.match(regex)[2]);
console.log("Line number: "+str.match(regex)[2]);
// output:
// Area code: (123)
// Central office code: 456
// Line number: 456


// Task 6
regex = /^[A-Za-z0-0_.]+/g;
str = "nitika@gmail.com";
console.log("username: "+str.match(regex));
regex = /\.[a-zA-Z]{2,}$/g;
console.log("domain: "+str.match(regex));
// Output: 
// username: nitika
// domain: .com


// Activity 4: Assertions and Boundaries
// Task 7
regex = /^Hello/g;
str = "Hello , this is regular exp to match word only if it is at beginning of string";
console.log(str.match(regex));
// output: [ 'Hello' ]
str  = "hii,this is regular exp to match word only if it is at beginning of string";
console.log(str.match(regex));
// output: null


// Task 8
regex = /end$/g;
str = "this is regular exp to match if end is present at end";
console.log(str.match(regex));
// output: [ 'end' ]


// Activity 5: Practical Applications
// Task 9
regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]+$/;
str = "johnS2123$";
console.log(regex.test(str));
// output: true


// Task 10
regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
str = "https://30daysjs.com/path/day19.js";
console.log(regex.test(str));
// output: true


