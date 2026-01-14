/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters. 
*/

var strStr = function(haystack, needle) {
    // Using Regex: Time Complexity - O(m*n), Space Complexity - O(m)
    /* 
    const regex = new RegExp(needle);
    const result = haystack.match(regex);
    if (result) {
        return result.index;
    }

    return -1;
    */

    // Another Approach - Sliding Window Pattern - Time Complexity - O(m*n), Space Complexity - O(m)
    let startIndex = 0;
    let endIndex = needle.length;

    while(endIndex <= haystack.length) {
        if (haystack.substring(startIndex, endIndex) === needle) {
            return startIndex;
        }
        startIndex++;
        endIndex++;
    }

    return -1;
};