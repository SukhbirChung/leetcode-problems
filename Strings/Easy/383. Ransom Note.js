/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 
Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // Time Complexity - O(n), Space Complexity - O(1)
    const ransomCount = {};
    const magazineCount = {};
    for (let ch of ransomNote) {
        if (ransomCount[ch]) {
            ransomCount[ch] += 1;
        } else {
            ransomCount[ch] = 1;
        }
    }
    for (let ch of magazine) {
        if (magazineCount[ch]) {
            magazineCount[ch] += 1;
        } else {
            magazineCount[ch] = 1;
        }
    }
    for (let ch of Object.keys(ransomCount)) {
        if (!magazineCount[ch]) return false;
        if (ransomCount[ch] > magazineCount[ch]) return false;
    }
    return true;
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("thisisaransomnote", "thisisamagazine")); // false