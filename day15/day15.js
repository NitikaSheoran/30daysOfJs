// Activity 1: Undrstanding Closures
// Task 1
function outer(){
    const outerVariable = "hello";
    return function inner(){
        return outerVariable;
    }
}

const variable = outer();
console.log(variable());
// output: hello


// Task 2
function counter(){
    let count = 0;
    return{
        incrementCounter: function(){
        count++;
        },
        getCount: function(){
            return count;
        }
    };
}
const c = counter();
c.incrementCounter();
console.log(c.getCount());
// output: 1


// Activity 2: Practical Closures
// Task 3
function Id(){
    let id = 1;
    return function uniqueId(){
        return id++;
    }
}
const uniqueId1 = Id();
console.log(uniqueId1(), uniqueId1(), uniqueId1());
// output: 1,2,3


// Task 4
function greeting(){
    return function Name(name){
        return `hello, ${name}`;
    }
}
let greetings = greeting();
console.log(greetings("Nitika"));
// output: hello, Nitika



// Activity 3: Closures in Loops
// Task 5
function log(n){
    for(let i=0; i<n; i++){
        (function(i) {
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        })(i);
    }
}

log(3);
// output: 0 1 2



// Activity 4: Module Pattern
// Task 6
function module(){
    let items = [];
    return{
        add: function(item){
            items.push(item);
            console.log(`${item} added`);
        },
        remove: function(item){
            let idx = items.indexOf(item);
            if(idx != -1){
                items.splice(idx,1);
                console.log(`${item} removed`);
            }else{
                console.log(`${item} not found`);
            }
        },
        listItems: function(){
            console.log("List of items: ");
            for(let i=0; i<items.length; i++){
                console.log(items[i]);
            }
        }
    };
}

let list = module();
list.add("pen");
list.add("pencil");
list.add("colors");
list.remove("pen");
list.add("sketchbook");
list.listItems();

// output: 
// pen added
// pencil added
// colors added
// pen removed
// sketchbook added
// List of items:
// pencil
// colors
// sketchbook


// Activity 5: Memorization
// Task 7
function memorize(fn){
    let cache = {};
    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key] != undefined){
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

function add(a,b){
    return a+b;
}

const memorizeAdd = memorize(add);
console.log(memorizeAdd(1,2));
console.log(memorizeAdd(2,3));
console.log(memorizeAdd(1,2));
// output: 3  5 3


// Task 8
function factorial(n){
    if(n<=1) return 1;
    return n*factorial(n-1);
}
const memorizeFact = memorize(factorial);
console.log(memorizeFact(3));
console.log(memorizeFact(4));
console.log(memorizeFact(3));
// output: 6 24 6
