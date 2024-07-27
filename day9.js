// Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements
// Task 1
let para = document.getElementById("para");
para.innerText = "This is day9 of 30 days of js series."     

// Task 2
let div = document.getElementsByClassName("30days");
div[0].style.background="black";

// Activity 2: Creating and Appending elements
// Task 3

let body = document.querySelector("body");
let newDiv = document.createElement("div");
newDiv.innerText = "This series has helped a lot in learning js so far";
body.append(newDiv);

// Task 4
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.innerText = "Day 9: DOM Manipulation";
ul.append(li);

// Activity 3: Removing elements

// Task 5
let p = document.querySelector("#soFar");
p.remove();

// Task 6
ul.removeChild(ul.lastChild);

// Activity 4: Modifying Attributes and Classes

// Task 7
let img = document.querySelector("img");
img.setAttribute("src","https://img-c.udemycdn.com/course/240x135/3641342_9c74.jpg");

// Task 8
div[0].classList.add("div2");
div[0].classList.remove("div");

// Activity 5: Event handling
// Task 9

let btn = document.querySelector("button");
btn.addEventListener('click',()=>{
    if(body.style.background == "white"){
        body.style.background="black";
        body.style.color="white";
    }else{
        body.style.background="white";
        body.style.color="black";
    }
});


// Task 10

ul.addEventListener("mouseover",()=>{
    ul.style.borderRadius="10px";
    ul.style.borderColor="black";
});



