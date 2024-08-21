// Activity 1: median of two sorted arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(num1, num2) {
    let i = 0;
    let j = 0;
    let k = 0;
    let num = [];
    while(i<num1.length && j<num2.length){
        if(num1[i] <= num2[j]){
            num[k] = num1[i];
            i++;
            k++;
        }
        if(num1[i] > num2[j]){
            num[k] = num2[j];
            j++;
            k++;
        }
    }
    if(i >= num1.length){
        while(j<num2.length){
            num[k] = num2[j];
            j++;
            k++;
        }
    }
    if(j >= num2.length){
        while(i<num1.length){
            num[k] = num1[i];
            i++;
            k++;
        }
    }
    let x = Math.floor(k/2);
    if(k%2 == 0){
        return (num[x]+num[x-1])/2;
    }else{
        return num[x];
    }
};

// Activity 2: Merge k sorted lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function merge(node1,node2){
    let x = new ListNode(0);
    let temp = x;
    while(node1!=null && node2!=null){
        if(node1.val <= node2.val){
            temp.next = new ListNode(node1.val);
            node1 = node1.next;
            temp = temp.next;
        }else{
            temp.next = new ListNode(node2.val);
            node2 = node2.next;
            temp = temp.next;
        }
    }
    
    while(node2!=null){
        temp.next = new ListNode(node2.val);
        node2 = node2.next;
        temp = temp.next;
    }
    
    
    while(node1!=null){
        temp.next = new ListNode(node1.val);
        node1 = node1.next;
        temp = temp.next;
    }
    
    return x.next;
}
function rec(lists,i){
    if(lists.length == 0){
        return null;
    }
    if(lists.length == 1){
        return lists[0];
    }
    while (lists.length > 1) {
        let mergedList = merge(lists[0], lists[1]);
        lists.splice(0, 2, mergedList); 
    }
    return lists[0];
}
var mergeKLists = function(lists) {
    return rec(lists,0);
};

// Activity 3: Trapped rain water


function leftMax(height) {
    let left = [];
    left[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }
    return left;
}

function rightMax(height) {
    let right = [];
    right[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i]);
    }
    return right;
}
var trap = function(height) {
    if(height.length == 0){
        return 0;
    }
    let left_max = leftMax(height);
    let right_max = rightMax(height);
    let water = 0;
    for(let i=0; i<height.length; i++){
        water+=Math.min(left_max[i],right_max[i])-height[i];
    }
    return water;
};

// Activity 4: n queens

/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function(n) {

    const isSafe = (row, col, board) => {
        // Check the same row
        for (let i = 0; i < board.length; i++) {
            if (board[row][i] === 'Q') {
                return false;
            }
        }

        // Check the same column
        for (let i = 0; i < board.length; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }

        // Check the upper left diagonal
        let r = row;
        let c = col;
        while (r >= 0 && c >= 0) {
            if (board[r][c] === 'Q') {
                return false;
            }
            r--;
            c--;
        }

        // Check the upper right diagonal
        r = row;
        c = col;
        while (r >= 0 && c < board.length) {
            if (board[r][c] === 'Q') {
                return false;
            }
            r--;
            c++;
        }

        // Check the lower left diagonal
        r = row;
        c = col;
        while (r < board.length && c >= 0) {
            if (board[r][c] === 'Q') {
                return false;
            }
            r++;
            c--;
        }

        // Check the lower right diagonal
        r = row;
        c = col;
        while (r < board.length && c < board.length) {
            if (board[r][c] === 'Q') {
                return false;
            }
            r++;
            c++;
        }

        return true;
    };

    const addSolution = (board, allBoards) => {
        const newBoard = board.map(row => row.join(''));
        allBoards.push(newBoard);
    };

    const placeQueens = (board, allBoards, col) => {
        if (col === board.length) {
            addSolution(board, allBoards);
            return;
        }
        for (let i = 0; i < board.length; i++) {
            if (isSafe(i, col, board)) {
                board[i][col] = 'Q';
                placeQueens(board, allBoards, col + 1);
                board[i][col] = '.';
            }
        }
    };

 
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const allBoards = [];
    placeQueens(board, allBoards, 0);
    return allBoards;
};