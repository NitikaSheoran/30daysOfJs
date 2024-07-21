// Activity 1: If-else Statements

// Task 1

let num = 2;
if(num == 0){
    console.log("number is 0");
}else if(num>0){
    console.log(`${num} is +ve`);       //output: 2 is +ve
}else{
    console.log(`${num} is -ve`);
}

// Task 2

let age = 19;
if(age>=18){
    console.log("eligible");
}else{
    console.log("not eligible");        //output: eligible
}

// Activity 2: Nested if-else Statements

// Task 3
let num1 = 10;
let num2 = 15;
let num3 = -5;
if(num1 >= num2){
    if(num1 >= num3){
        console.log(`num1 ${num1} is greatest`);
    }else{
        console.log(`num3 ${num3} is greatest`);
    }
}else{
    if(num2 >= num3){
        console.log(`num2 ${num2} is greatest`);    //output: num2 15 is greatest
    }else{
        console.log(`num3 ${num3} is greatest`);
    }
}

// Activity 3: Switch case

// Task 4
let DayNum = 3;
let day;
switch (DayNum) {
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
        day = "Sunday";
}
console.log(`Day = ${day}`); //output: Day = Wednesday

// Task 5
let score = 80;
  switch (Math.floor(score / 10)) {
    case 10: case 9:
        console.log('Grade = A');
        break;
    case 8:
        console.log('Grade = B');
        break;
    case 7:
        console.log('Grade = C');
        break;
    case 6:
        console.log('Grade = D');
        break;
    case 5:
        console.log('Grade = E');
        break;
    default:
        console.log('Grade = F');      //OUTPUT : Grade = B
}

//Activity 4: Conditional operator

// Task 6
let number = 7;
(number%2 == 0) ? console.log("number is even") : console.log("number is odd"); //output: number is odd

// Activity 5: Combining Conditions

// Task 7
let year = 2024;
if((year % 100 == 0 && year % 400 == 0)||(year % 100 != 0 && year % 4 == 0)){
    console.log(`${year} is leap year`);
}else{
    console.log(`${year} is not leap year`);   //output 2024 is leap year
}

