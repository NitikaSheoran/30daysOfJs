// Day 7: Objects

// Activity 1: Object creation and access
// Task 1
const book = {
    title: "A Good Girl's guide to Murder",
    author: "Holly Jackson",
    year: 2019,
    details(){
        return this.title + this.author ;
    },
    Updatedyear(yr){
        this.year = yr;
    }
};
console.log(book);     

// Task 2
console.log(`title: ${book.title}`);   //output: title: A Good Girl's guide to Murder
console.log(`author: ${book.author}`);  //output: author: Holly Jackson

// Activity 2: Object Methods
// Task 3

console.log(book.details());             //output: A Good Girl's guide to Murder  Holly Jackson

// Task 4
book.Updatedyear(2016);
console.log(book.year);                //output: 2016

// Activity 3: Nested Objects
// Task 5

const library = {
    name: "city library",
    books: [ {
            name: "The palace of illusions",
            author: "Chitra Banerjee",
        },
        {
        name: "A good girl's guide to murder",
        author: "Holly Jackson",
        }
    ]
}
console.log(library);

// Task 6
console.log(library.name);            //utput: city library
console.log(library.books[0].name ," ,", library.books[1].name);  //output: The palace of illusions , A good girl's guide to murder

// Activity 4: The this keyword
// Task 7
const book1 = {
    name: "abc",
    year: 2019,
    detail(){
        return `title: ${this.name} year: ${this.year}`;
    }
}
console.log(book1.detail());     //output: title: abc year: 2019

// Activity 5: Object iteration
// Task 8

for(let i in book1){
    console.log(i);              //output:  name abc year 2019
    console.log(book1[i]);
}

// Task 9
console.log(Object.keys(book1));       //output: [name,year]
console.log(Object.values(book1));     //output: [abc,2019]