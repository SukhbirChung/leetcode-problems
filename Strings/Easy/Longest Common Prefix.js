/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }

    for (let str of strs) {
        if (str.length === 0) {
            return "";
        }
    }    

    let longest = strs[0];

    // Time Complexity - O(n * m), Space Complexity - O(n)
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < longest.length; j++) {
            if (longest[j] !== strs[i][j]) {
                longest = longest.substring(0, j);

                if (longest.length === 0) {
                    return "";
                } else {
                    break;
                }
            }
        }
    }

    return longest;
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""