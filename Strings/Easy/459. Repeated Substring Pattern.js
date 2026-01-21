/*
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example 1:
Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:
Input: s = "aba"
Output: false

Example 3:
Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 
Constraints:
1 <= s.length <= 104
s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // Time Complexity: O(n), Space Complexity: O(1)
    let end = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[0]) {
            end = i - 1;
            break;
        }
    }

    if (s.length % (end + 1) || s.length === 1) {
        return false;
    }

    if (!end) {
        return true;
    }

    for (let i = end + 1; i < s.length; i++) {
        if (s[i] !== s[i - end - 1]) {
            return false;
        }
    }    

    return true;
};

console.log(repeatedSubstringPattern('a')); // false
console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('abcabcabcabc')); // true
console.log(repeatedSubstringPattern('aa')); // true