// Activity 1: Add two numbers


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let node = new ListNode(0);
    let temp = node;
    while(carry!=0 || l1!=null || l2!=null){
        if(l1 == null && l2!=null){
            temp.next = new ListNode((l2.val + carry)%10);
            carry = Math.floor((l2.val + carry)/10);
            l2 = l2.next;
            temp = temp.next;
        }else if(l1!=null && l2==null){           
            temp.next = new ListNode((l1.val + carry)%10);
            carry = Math.floor((l1.val + carry)/10);
            l1 = l1.next;
            temp = temp.next;
        }else if(l1 == null && l2 == null){
            temp.next = new ListNode(carry);
            carry = 0;
            temp = temp.next;
        }else{            
            temp.next = new ListNode((l1.val + l2.val + carry)%10);
            carry = Math.floor((l1.val + l2.val + carry)/10);
            l1 = l1.next;
            l2 = l2.next;
            temp = temp.next;
        }    
    }
    return node.next;
};


// Activity 2: maximum length of substring without repeating characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let r = 0;
    let maxLen = 0;
    let map = new Map();
    while(r!=s.length){
        let char = s[r];
        if(map.has(char)){
            l = Math.max(map.get(char) + 1, l);
        }
        map.set(char, r);
        maxLen = Math.max(maxLen,r-l+1);
        r++;
    }
    return maxLen;
};


// Activity 3: Container with most water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let right = height.length -1;
    let left = 0;
    let maxArea = 0;
    while(right > left){
        let area = Math.min(height[left],height[right])*(right-left);
        maxArea = Math.max(area,maxArea);
        if(height[left] > height[right]){
            right--;
        }else{
            left++;
        }
    }
    return maxArea;
};


// Activity 4: 3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let arr = [];
    for(let i=0; i<nums.length-2; i++){
        if(i>0 && nums[i] == nums[i-1]) continue;
        let left = i+1;
        let right = nums.length-1;
        while(left<right){
          let sum = nums[left] + nums[right] + nums[i];
            if(sum == 0){
                arr.push([nums[left],nums[right],nums[i]]);
                while(left <= right && nums[left] == nums[left + 1])  left++;
                while(left <= right && nums[right] == nums[right - 1]) right--;
                left++;
                right--;
             }else if(sum > 0){
                right--;
             }else{
                left++;
             }

         }
     }
    return arr;
};


// Activity 5: Group anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let map = new Map();
    for(str of strs){
        let sortedKey = str.split('').sort().join('');
        if(map.has(sortedKey)){
            map.get(sortedKey).push(str);
        }else{
            map.set(sortedKey,[str]);
        }
    }
    return Array.from(map.values());
};