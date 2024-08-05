// Day 14

// Activity 1: Class Definition
// Task 1
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.firstName = "n";
        this.lastName = "s";
    }
    greeting(){
        return `hello ${this.name}`;
    }
    updateAge(newAge){
        this.age = newAge;
        console.log(`new age is ${this.age}`);
    }
    static greet(){
        return "Hello,this is a static method"
    }
    getFullname(){
        return `${this.firstName} ${this.lastName}`;
    }
    setFirstname(new_firstname){
        this.firstName = new_firstname;
    }
    setLastname(new_lastname){
        this.lastName = new_lastname;
    }
}

const person1 = new Person("Nitika",20);
console.log(person1.greeting());
// output: hello Nitika


// Task 2
person1.updateAge(19);
// output: new age is 19


// Activity 2: Class Inheritance
// Task 3
class Student extends Person{
    static totalStudents = 0;
    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId;
        Student.totalStudents++;
    }
    getId(){
        return this.studentId;
    }
    greeting(){
        return `hello ${this.name}, your student id is ${this.studentId}`;
    }

}

const student1 = new Student("Nitika",20,2164);
console.log(student1.getId());
// output: 2164


// Task 4
console.log(student1.greeting());
// output: hello Nitika, your student id is 2164



// Activity 3: Static Methods and Properties
// Task 5
console.log(Person.greet());
// output: Hello,this is a static method


// Task 6
console.log(Student.totalStudents);
// output: 1



// Activity 4: Getters and Setters
// Task 7
const student2 = new Student("Isham",19,2168);
console.log(student2.getFullname());
// output: n s

// Task 8
student2.setFirstname("isham");
student2.setLastname("ahuja");
console.log(student2.getFullname());
// output: isham ahuja


// Activity 5: Private Fields(optional)
// Task 9
class Account{
    #balance;
    constructor(balance = 0){
        this.#balance = balance;
    }

    withdraw(amount){
        if(amount>0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`amount withdrawn: ${amount}  current balance: ${this.#balance}`);
        }else if(amount>this.#balance){
            console.log(`account does not have this much balance.(current balance = ${this.#balance}`);
        }else{
            console.log("enter +ve amount");
        }
    }

    deposite(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`amount deposited: ${amount}  current balance: ${this.#balance}`)
        }else{
            console.log("enter +ve amount");
        }
    }

    total_balance(){
        return this.#balance;
    }
}

// Task 10
let account1 = new Account(1000);
account1.withdraw(500);
console.log(account1.total_balance);
account1.deposite(700);
console.log(account1.total_balance);
// output:
// amount withdrawn: 500  current balance: 500
// amount depoited: 500  current balance: 1200