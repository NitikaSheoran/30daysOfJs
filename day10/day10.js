// Day 10: Event Handling

// Activity 1: Basic event handling
// Task 1

const para = document.querySelector("#para");
const btn = document.querySelector("#change_para");
btn.addEventListener('click',()=>{
    para.innerText = "Today is day 10 of javascript challenge";
});

// Task 2
let img = document.querySelector("#image_visibility");
img.addEventListener("dblclick", () => {
    img.style.visibility = img.style.visibility === "hidden" ? "visible" : "hidden";
});

// Activity 2: Mouse events
// Task 3
const div = document.querySelector(".background");
div.addEventListener("mouseover",()=>{
    div.style.background = "purple";
});

// Task 4
div.addEventListener("mouseout",()=>{
    div.style.background = "white";
});

// Activity 3: Keyboard events
// Task 5
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

// Task 6
const display = document.querySelector("#display");
textBox.addEventListener("keyup",(event)=>{
    display.innerText = `You entered ${event.target.value}`;
});

// Activity 4: Form events
// Task 7
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(fname,lname);
});

// Task 8
const select = document.querySelector("select");
const select_para = document.querySelector("#select");
select.addEventListener("change",()=>{
    select_para.innerText = `selected value = ${select.value}`;
});

// Activity 5: Event Delegation
// Task 9
const itemList = document.getElementById("item-list");
const p = document.querySelector("#list");
itemList.addEventListener("click",(event)=>{
    if (event.target && event.target.matches("li.list-item")) {
        console.log("Clicked on: " + event.target.textContent);
        p.innerText = "Clicked on: " + event.target.textContent;
    }
});

// Task 10
const add = document.querySelector("#add-item");
add.addEventListener("click",()=>{
    const newitem = document.createElement("li");
    newitem.classList.add("list-item");
    newitem.textContent = "new item";
    itemList.appendChild(newitem);
})