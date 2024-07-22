// Day 4

// Activity 1: For loop

// Task 1 : print 1-10
for(let i =1 ;i<=10; i++){
    console.log(i);
}                                       // output: 1 2 3 4 5 6 7 8 9 10

// Task 2 : table of 5
for(let i =1 ;i<=10; i++){
    console.log(5*i);
}                                       // output 5 10 15 20 25 30 35 40 45 50


// Activity 2: While loop

// Task 3 : sum of numbers 1-10
i = 1;
let sum = 0;
while(i<=10){
    sum+=i;
    i++;
}
console.log(`sum of numbers 1-10 = ${sum}`);    //output: sum of numbers 1-10 = 55

// Task 4: print 10-1
i = 10;
while(i!=0){
    console.log(i);
    i--;
}                               // output 10 9 8 7 6 5 4 3 2 1 

// Activity 3: Do while loop

// Task 5
i = 1;
do{
    console.log(i);
    i++;
}while(i!=6);                    // output: 1 2 3 4 5



// Task 6: factorial
let fact = 1;
i = 5;
do{
    fact *= i;
    i--;
}while(i!=0);
console.log(`5! = ${fact}`);      // output: 5! = 120

// Activity 4: Nested loops

// Task 7: pattern
for(i = 0;i<5;i++){
    let str = "";
    for(j=0;j<=i;j++){
        str = str+"*"+" ";
    }
    console.log(str);
}
// output
// *
// * *
// * * *
// * * * * 
// * * * * *

// Activity 5: Loop control statements

// Task 8: continue statement
for(i = 1;i<=10;i++){
    if(i==5){
        continue;
    }else{ 
        console.log(i);       // output: 1 2 3 4 6 7 8 9 10
    }
}

// Task 9: break statement
for(i = 1;i<=10;i++){
    if(i == 7){
        break;
    }else{
        console.log(i);        // output: 1 2 3 4 5 6
    }
}


