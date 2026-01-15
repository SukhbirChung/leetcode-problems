/*
We define the usage of capitals in a word to be right when one of the following cases holds:
All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".

Given a string, return true if the usage of capitals in it is right.

Example 1:
Input: word = "USA"
Output: true

Example 2:
Input: word = "FlaG"
Output: false
 
Constraints:
1 <= word.length <= 100
word consists of lowercase and uppercase English letters.
*/

var detectCapitalUse = function (word) {
    /*
    If the first letter is lowercase, all the rest of the characters must be lowercase.
    If the first letter is uppercase:
        If the second letter is lowercase, all the rest of the characters must be lowercase.
        If the second letter is uppercase, all the rest of the characters must be uppercase.
    */

    if (word.length === 1) {
        return true;
    }

    if (word.charCodeAt(0) >= 97) {
        for (let i = 1; i < word.length; i++) {
            if (word.charCodeAt(i) < 97) {
                return false;
            }
        }
        return true;
    }

    if (word.charCodeAt(1) >= 97) {
        for (let i = 2; i < word.length; i++) {
            if (word.charCodeAt(i) < 97) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i < word.length; i++) {
        if (word.charCodeAt(i) >= 97) {
            return false;
        }
    }
    return true;
};

console.log(detectCapitalUse("USA")); // true
console.log(detectCapitalUse("FlaG")); // false