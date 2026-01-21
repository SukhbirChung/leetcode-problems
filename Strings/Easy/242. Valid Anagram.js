/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Time Complexity - O(n), Space Complexity - O(1)
    if (s.length != t.length) return false;
    
    const letterCountInS = {};    
    for (let ch of s) {
        if (letterCountInS[ch]) {
            letterCountInS[ch] = letterCountInS[ch] + 1;
        } else {
            letterCountInS[ch] = 1;
        }
    }

    const letterCountInT = {};
    for (let ch of t) {
        if (!letterCountInS[ch]) return false;

        if (letterCountInT[ch]) {
            letterCountInT[ch] = letterCountInT[ch] + 1;
        } else {
            letterCountInT[ch] = 1;
        }
    }

    for (let ch of Object.keys(letterCountInS)) {
        if (letterCountInS[ch] !== letterCountInT[ch]) return false;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("r", "r")); // true
console.log(isAnagram("r", "t")); // false
console.log(isAnagram("roar", "roar")); // true
console.log(isAnagram("anagram", "nagara")); // false
console.log(isAnagram("nagara", "anagra")); // true