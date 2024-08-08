// Activity 1: Linked List
// Task 1

class Node{
    constructor(val,next = null){
        this.val = val;
        this.next = next;
    }
}

const head = new Node(5);

// Task 2
class LinkedList{
    add_end(head,val) {
        let temp = head;
        if(temp.next == null){
            temp.next = new Node(val);
        }else{
            while(temp.next!=null){
                temp = temp.next;
            }
            temp.next = new Node(val);
        }
        
    }
    remove_end(head){
        let temp = head;
        while(temp.next.next != null){
            temp = temp.next;
        }
        temp.next = null;
    }
    display(head){
        let temp = head;
        while(temp!=null){
            console.log(temp.val);
            temp = temp.next;
        }
    }
}
let linkedList1 = new LinkedList();
linkedList1.add_end(head,6);
linkedList1.add_end(head,8);
linkedList1.display(head);
// output:
// 5
// 6
// 8
linkedList1.remove_end(head);
linkedList1.display(head);
// output:
// 5
// 6

// Activtiy 2: Stack
// Task 3
class Stack{
    constructor(){
        this.top = -1;
        this.stack = [];
    }
    push(val){
        this.top++;
        this.stack[this.top] = val;
    }
    pop(){
        if(this.top == -1){
            console.log("empty stack");
        }
        let temp = this.stack[this.top];
        this.top--;
        return temp;
    }
    peek(){
        return this.stack[this.top];
    }
    display(){
        while(this.top!=-1){
            console.log(this.stack[this.top]);
            this.top--;
        }
    }
}

let stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.pop();
stack1.display();
// output
// 2
// 1

// Task 4
let str = "helloWorld";
let str_stack = new Stack();
for(let i=0; i<str.length; i++){
    str_stack.push(str[i]);
}
let reversedStr = "";
for(let i=0; i<str.length; i++){
    reversedStr += str_stack.pop();
}
console.log(`original str: ${str} reversed str: ${reversedStr}`);
// output: original str: helloWorld reversed str: dlroWolleh

// Activity 3: Queue
// Task 5
class Queue{
    constructor(){
        this.front = -1;
        this.rear = -1;
        this.queue = [];
    }
    enqueue(val){
        if(this.rear == -1 && this.front == -1){
            this.rear = 0 ;
            this.front = 0;
            this.queue[this.rear] = val;
        }else{
            this.rear++;
            this.queue[this.rear] = val;
        }
        
    }
    dequeue(){
        if(this.front == -1 && this.rear == -1){
            console.log("empty queue");
        }else if(this.front == this.rear){
            let temp =this.queue[this.front];
            this.rear = this.front = -1;
            return temp;
        }else{
            return this.queue[this.front++];
        }
    }
    peek(){
        return this.queue[this.rear];
    }
    display(){
        let i = this.front;
        while(i <= this.rear){
            console.log(this.queue[i]);
            i++;
        }
    }
}

let queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.dequeue();
queue1.enqueue(4);
queue1.display();
// output:
// 2
// 3
// 4

// Task 6
let print = new Queue();
print.enqueue("job1");
print.enqueue("job2");
print.enqueue("job3");
print.enqueue("job4");
print.display();
// output:
// job1
// job2
// job3
// job4

// Activity 4: Binary tree
// Task 7
class TreeNode{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
// let root = new TreeNode(5);

// Task 8
class BinaryTree {
    insert() {
        const val = parseInt(prompt('Enter data for node (enter -1 to terminate): '), 10);
        
        if (val === -1) {
            return null;
        } else {
            const node = new TreeNode(val);
            console.log(`Create left subtree of ${val}: `);
            node.left = this.insert();
            console.log(`Create right subtree of ${val}:`);
            node.right = this.insert();
            return node;
        }
    }

    inorderDisplay(node) {
        if (node === null) {
            return;
        } else {
            this.inorderDisplay(node.left);
            console.log(node.val);
            this.inorderDisplay(node.right);
        }
    }
}
let binaryTree = new BinaryTree();
let root1 = binaryTree.insert();

binaryTree.inorderDisplay(root1);