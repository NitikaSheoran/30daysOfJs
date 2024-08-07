// Activity 1: Basic Recursion
// Task 1
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*factorial(n-1);
}

let fact = factorial(5);
console.log(`factorial of 5: ${fact}`);
fact = factorial(6);
console.log(`factorial of 6: ${fact}`);
fact = factorial(7);
console.log(`factorial of 7: ${fact}`);
// output:
// factorial of 5: 120
// factorial of 6: 720
// factorial of 7: 5040


// Task 2
function fibonacci(n){
    if(n == 1 || n==2){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

let fib = fibonacci(5);
console.log(`5th fibonaci number is: ${fib}`);
fib = fibonacci(6);
console.log(`6th fibonaci number is: ${fib}`);
fib = fibonacci(1);
console.log(`1th fibonaci number is: ${fib}`);
// output:
// 5th fibonaci number is: 5
// 6th fibonaci number is: 8
// 1th fibonaci number is: 1


// Activity 2: Recursion with Arrays
// Task 3
function sum(arr){
    if(arr.length==0 ){
        return 0;
    }
    return arr[0] + sum(arr.slice(1));
}
let arr = [1,2,3,4,5];
let arrSum = sum(arr);
console.log(arr);
console.log(`array sum: ${arrSum}`);

arr = [0,2,-3,4,5];
arrSum = sum(arr);
console.log(arr);
console.log(`array sum: ${arrSum}`);

arr = [-2,2,0,4,-5];
arrSum = sum(arr);
console.log(arr);
console.log(`array sum: ${arrSum}`);
// output:
// [ 1, 2, 3, 4, 5 ]
// array sum: 15
// [ 0, 2, -3, 4, 5 ]
// array sum: 8
// [ -2, 2, 0, 4, -5 ]
// array sum: -1


// Task 4
function maximum(arr){
    if(arr.length == 0){
        return Number.MIN_SAFE_INTEGER;
    }
    return Math.max(arr[0],maximum(arr.slice(1)));
}
arr = [1,2,3,4,5];
let maxArr = maximum(arr);
console.log(`maximum element in arr: ${maxArr}`);
// output: maximum element in arr: 5

arr = [0,20,3,4,5];
maxArr = maximum(arr);
console.log(`maximum element in arr: ${maxArr}`);
// output: maximum element in arr: 20

arr = [1,2,35,4,5];
maxArr = maximum(arr);
console.log(`maximum element in arr: ${maxArr}`);
// output: maximum element in arr: 35


// Activity 3: String Manipulation with recursion
// Task 5
function reverse(str,newstr,i){
    if(i < 0){
        return newstr;
    }
    return reverse(str,newstr+str[i],i-1);
}

let str = "hello";
let reversed = reverse(str,"",str.length-1);
console.log(`actual string: ${str}   reversed string: ${reversed}`);
// output: actual string: hello   reversed string: olleh

str = "world";
reversed = reverse(str,"",str.length-1);
console.log(`actual string: ${str}   reversed string: ${reversed}`);
// output: actual string: world   reversed string: dlrow

// Task 6
function palindrome(str,i,j){
    if(i>=j){
        return true;
    }
    if(str[i]!=str[j]){
        return false;
    }else{
        return palindrome(str,i+1,j-1);
    }
}
let str1 = "abba";
if(palindrome(str1,0,str1.length-1)){
    console.log(`${str1} is a palindrome`);
}else{
    console.log(`${str1} is not a palindrome`);
}
// output: abba is a palindrome

str1 = "abbadabba";
if(palindrome(str1,0,str1.length-1)){
    console.log(`${str1} is a palindrome`);
}else{
    console.log(`${str1} is not a palindrome`);
}
// output: abbadabba is a palindrome

str1 = "abbadabca";
if(palindrome(str1,0,str1.length-1) == true){
    console.log(`${str1} is a palindrome`);
}else{
    console.log(`${str1} is not a palindrome`);
}
// output: abbadabca is not a palindrome


// Activity 4: Recursive search
// Task 7
function binarySearch(arr,n,l,r){
    if(l>r){
        return -1;
    }
    let mid = Math.floor((l+r)/2);

    if(arr[mid] == n){
        return mid;
    }else if(arr[mid] > n){
        return binarySearch(arr,n,l,mid-1);
    }else{
        return binarySearch(arr,n,mid+1,r);
    }
}

arr = [1,2,3,4,5];
let index = binarySearch(arr,4,0,arr.length-1);
console.log(`number found at index: ${index}`);
// output: number found at index: 3

arr = [1,2,3,4,5];
index = binarySearch(arr,2,0,arr.length-1);
console.log(`number found at index: ${index}`);
// output: number found at index: 1

arr = [1,2,3,4,5];
index = binarySearch(arr,5,0,arr.length-1);
console.log(`number found at index: ${index}`);
// output: number found at index: 4


// Task 8
function occurence(arr,i,n){
    if(i >= arr.length){
        return 0;
    }
    let count = (arr[i] === n) ? 1 : 0;
    count += occurence(arr,i+1,n);
    return count;
}
arr = [3,2,3,3,5];
let count = occurence(arr,0,3);
console.log(`occurence of 3 in array: ${count}`);
// output: occurence of 3 in array: 3

arr = [1,2,3,5,5];
count = occurence(arr,0,5);
console.log(`occurence of 5 in array: ${count}`);
// output: occurence of 5 in array: 2

// Activity 5: Tree Traversal
// Task 9

function inorder(arr,i){
    if(i >= arr.length || arr[i] === undefined){
        return;
    }
    inorder(arr,2*i+1);
    console.log(arr[i]);
    inorder(arr,2*i+2);
}
arr = [1,2,3,4,5,6];
inorder(arr,0);
console.log("\n");
// output:
// 4
// 2
// 5
// 1
// 6
// 3
arr = [1,4,3,9,5,0];
inorder(arr,0);
console.log("\n");
// output:
// 9
// 4
// 5
// 1
// 0
// 3

arr = [4,2,9,4,6,8];
inorder(arr,0);
console.log("\n");
// output:
// 4
// 2
// 6
// 4
// 8
// 9

// Task 10
function tree(val,left = null, right = null){
    this.val = val;
    this.right = right;
    this.left = left;
}

function depth(root){
    if(root === null){
        return 0;
    }
    let rightDepth = depth(root.right);
    let leftDepth = depth(root.left);
    return Math.max(rightDepth,leftDepth) + 1;
}

let root = new tree(1);
root.left = new tree(3);
root.right = new tree(4);
root.left.left = new tree(5);
root.left.right = new tree(6);

let treeDepth = depth(root);
console.log(`depth of tree: ${treeDepth}`);
// output:  depth of tree: 3