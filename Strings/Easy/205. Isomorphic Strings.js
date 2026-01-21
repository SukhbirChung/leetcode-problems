/*
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
Explanation:
The strings s and t can be made identical by:
Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

Example 2:
Input: s = "foo", t = "bar"
Output: false
Explanation:
The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:
Input: s = "paper", t = "title"
Output: true

Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    // Time Complexity - O(n), Space Complexity - O(n)
    if (s.length != t.length) return false;

    let mapping = {};
    for (let i = 0; i < s.length; i++) {
        if (mapping[s[i]]) {
            if (mapping[s[i]] !== t[i]) return false;
        } else {
            mapping[s[i]] = t[i];
        }
    }

    mapping = {};
    for (let i = 0; i < t.length; i++) {
        if (mapping[t[i]]) {
            if (mapping[t[i]] !== s[i]) return false;
        } else {
            mapping[t[i]] = s[i];
        }
    }

    return true;
};

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('add', 'egg')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('pap', 'title')); // false
console.log(isIsomorphic('ab', 'aa')); // false
console.log(isIsomorphic('aa', 'aa')); // true