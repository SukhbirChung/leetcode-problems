/*
Given a string s, return the number of segments in the string.
A segment is defined to be a contiguous sequence of non-space characters.

Example 1:
Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

Example 2:
Input: s = "Hello"
Output: 1
 
Constraints:
0 <= s.length <= 300
s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
The only space character in s is ' '.
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.trim();
    if (!s.length) return 0;

    // Time Complexity - O(n), Space Complexity - O(n)
    // return s.split(' ').length;

    // Time Complexity - O(n), Space Complexity - O(1)
    let wordCount = 1;
    let flag = false;

    for (let ch of s) {
        if (flag && ch === ' ') {
            continue;
        }
        if (ch === ' ') {
            flag = true;
            wordCount++;
        } else {
            flag = false;
        }
    }

    return wordCount;
};

console.log(countSegments("Hello, my name is John")); // 5
console.log(countSegments("Hello")); // 1
console.log(countSegments("")); // 0
console.log(countSegments("Hello  World")); // 2
console.log(countSegments(", , , ,        a, eaefa")); // 6