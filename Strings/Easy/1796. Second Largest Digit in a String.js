/*
Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
An alphanumeric string is a string consisting of lowercase English letters and digits.

Example 1:
Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

Example 2:
Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 
Constraints:
1 <= s.length <= 500
s consists of only lowercase English letters and digits.
*/

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    // Time Complexity - O(n), Space Complexity - O(n)
    const regex = /[0-9]/g;
    const result = s.match(regex);

    if (!result) {
        return -1;
    }
    
    result.sort();

    let largest = result[result.length - 1];
    for (let i = result.length - 2; i >= 0; i--) {
        if (result[i] < largest) {
            return Number(result[i]);
        }
    }

    return -1;
};

console.log(secondHighest("dfa12321afd")); // 2
console.log(secondHighest("abc1111")); // -1