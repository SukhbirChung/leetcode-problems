/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.
For example, if s = "abcde", then it will be "bcdea" after one shift.
 
Example 1:
Input: s = "abcde", goal = "cdeab"
Output: true

Example 2:
Input: s = "abcde", goal = "abced"
Output: false
 
Constraints:
1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    // Time Complexity - O(n), Space Complexity - O(1)
    if (s.length !== goal.length) return false;

    let j = goal.indexOf(s[0]);
    let originalIndex = j;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[j++]) {
            //return false;
            break;
        }
        if (j === goal.length) {
            j = 0;
        }
    }

    return true;
};

console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false
console.log(rotateString("a", "a")); // true
console.log(rotateString("abc", "abc")); // true
console.log(rotateString("aa", "aa")); // true
console.log(rotateString("abcdef", "fabcde")); // true
console.log(rotateString("abcdef", "bcdefa")); // true
console.log(rotateString("abcdef", "cdeabc")); // false