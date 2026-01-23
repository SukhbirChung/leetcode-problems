/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "Mr Ding"
Output: "rM gniD"
 
Constraints:
1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Time Complexity - O(n), Space Complexity - O(n)
    let result = '';
    let temp = '';

    for (let ch of s) {
        if (ch !== " ") {
            temp = ch + temp;
        } else {
            result += temp + " ";
            temp = "";
        }
    }

    return result + temp;
};

console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("Mr Ding")); // "rM gniD"
console.log(reverseWords("M")); // "M"
console.log(reverseWords("Ding")); // "gniD"