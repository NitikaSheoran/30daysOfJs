// ACTIVITY 1 : Sorting Algorithms
// Task 1
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

let arr = [-1,0,5,3,9,56,8,75];
bubbleSort(arr);
console.log(`sorted array is ${arr}`);
//output : sorted array is -1,0,3,5,8,9,56,75


// Task 2
function SelectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(min!=i){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
}

let arr2 = [-1,0,5,3,9,56,8,75];
SelectionSort(arr2);
console.log(`sorted array is ${arr2}`);
//output : sorted array is -1,0,3,5,8,9,56,75


// Task 3
function Quick(arr,lb,up){
    let start = lb;
    let end = up;
    let pivot = arr[lb];
    while(start<end){
        while(arr[start]<=pivot)
            start++;
        while(arr[end]>pivot)
            end--;
        if(start<end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
        }
    }
    let temp = arr[lb];
    arr[lb] = arr[end];
    arr[end] = temp;
    return end;
}
function quickSort(arr,lb,up){
    if(lb<up){
        let loc = Quick(arr,lb,up);
        quickSort(arr,lb,loc);
        quickSort(arr,loc+1,up);
    }
}

let arr3 = [-1,0,5,3,9,56,8,75];
quickSort(arr3,0,arr3.length-1);
console.log(`sorted array is ${arr3}`);

//output : sorted array is -1,0,3,5,8,9,56,75


// Activity 2 : Searching Algorithms
// Task 4
function LinearSearch(arr,key){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==key){
            return i;
        }
    }
    return -1;
}

let arr4 = [-1,0,5,3,9,56,8,75];
let key = 9;
console.log(LinearSearch(arr4,key));

//output : 4

// Task 5
function BinarySearch(arr,key){
    start = 0
    end = arr.length - 1
    while(start<=end){
        let mid = (start+end)/2;
        if(arr[mid]==key)
            return mid;
        else if(arr[mid]>key){
            end = mid-1;
        }
        else{
            start = mid+1;
        }
    }
    return -1;
}

let arr5 = [-1,0,5,3,9,56,8,75]
let k = 9;
console.log(BinarySearch(arr5,k));

//output : 4


// Activity 3: STring Algorithms
// Task 6
function countOccurence(str,ch){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]==ch)
            count++;
    }
    return count;
}

let str = "abcdeabcdeabcdeabcdee";
let l = "";
for(let i=0;i<str.length;i++)
{
    if(l.indexOf(str[i])==-1){
        let oc = countOccurence(str,str[i]);
        console.log(`occurence of ${str[i]} in ${str} is ${oc}`);
        l = l + str[i];
    }
}

/*output : occurence of a in abcdeabcdeabcdeabcde is 4
occurence of b in abcdeabcdeabcdeabcdee is 4
occurence of c in abcdeabcdeabcdeabcdee is 4
occurence of d in abcdeabcdeabcdeabcdee is 4
occurence of e in abcdeabcdeabcdeabcdee is 5
*/


// Task 7
function LongestSubstring(str){
    let max = 0;
    for(let i=0;i<str.length;i++)
    {
        sub = "";
        count = 0;
        for(let j=i;j<str.length;j++)
        {
            if(sub.indexOf(str[j])==-1)
            {
                sub = sub + str[j];
                count+=1;
            }
        }
        if(count>max){
            max = count;
        }
    }
    return max;
}

console.log(`length of longest substring in string ${str} is ${LongestSubstring(str)}`);

//output : length of longest substring in string abcdeabcdeabcdeabcdee is 5

// Activity 4: Array algorithms


// Task 8
function RightrotateArray(arr,k){
    k = k % arr.length;
    if(k==0)
        return arr;
    else{
        let a = arr.splice(0,1);
        arr.push(a);
        return RightrotateArray(arr,k-1);
    }
}

let arr6 = RightrotateArray([1,2,3,4,5,6],4);
console.log(`rotated array of [[1,2,3,4,5,6] is ${arr6}`);

//output : rotated array of [[1,2,3,4,5,6] is 5,6,1,2,3,4

// Task 9
function merge(arr1,arr2){
    let k=0;
    let i=0;
    let j=0;
    let arr = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            arr.push(arr1[i]);
            i++;
        }
        else{
            arr.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        arr.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}

let a1 = [2,4,6,8,10];
let a2 = [1,3,5,7,9,11,13];
let afinal = merge(a1,a2);
console.log(`merged array is ${afinal}`);

//output : merged array is 1,2,3,4,5,6,7,8,9,10,11,13