/*
Given an integer num, return a string of its base 7 representation.

Example 1:
Input: num = 100
Output: "202"

Example 2:
Input: num = -7
Output: "-10"
 
Constraints:
-107 <= num <= 107
*/

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    // Time Complexity: O(log₇ n), Space Complexity: O(log₇ n)
    if (num === 0) return '0';

    let result = '';
    let receivedNum = Math.abs(num);

    while (receivedNum > 0) {
        result = (receivedNum % 7) + result;
        receivedNum = Math.floor(receivedNum / 7);
    }

    return num < 0 ? `-${result}` : result;
};

console.log(convertToBase7(100)); // "202"
console.log(convertToBase7(-7)); // "-10"