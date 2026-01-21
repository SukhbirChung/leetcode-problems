/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.
*/

var firstUniqChar = function(s) {
    // Time Complexity - O(n), Space Complexity - O(1) because English alphabet contains 26 letters. 

    const myMap = new Map();

    for (let i = 0; i < s.length; i++) {
        /*
          1. myMap.get(s[i]) - finds if the key (the character that we are at right now in s) already exists.
          If it does not exist undefined is returned.
           2. myMap.get(s[i]) || 0 gives us 0 because in OR operator, if the first value is false, second value is returned. If the key does not exist, this line of code sets the value of the key to 1.
           3. Otherwise, myMap.get(s[i]) gives the value stored in it. Add 1 to it.
        */
        myMap.set(s[i], (myMap.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (myMap.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};