/*
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
If there are fewer than k characters left, reverse all of them.
If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Example 2:
Input: s = "abcd", k = 2
Output: "bacd"
 
Constraints:
1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    /*
    Time Complexity: O(n)
        let n = s.length
        Outer loop runs (n / (2 * k)) times
        Inner loop:
            substring takes (2 * k) time
            first inner loop takes k time
            second inner loop takes k time
        Calculation:
            (n / (2 * k)) * ((2 * k) + k + k)
    Space Complexity: O(n)
    */
    let result = '';

    for (let i = 0; i < s.length; i = i + (2 * k)) {
        const temp = s.substring(i, i + (2 * k));

        for (let j = k - 1; j >= 0; j--) {
            result = temp[j] ? result + temp[j] : result;
        }
        for (let j = k; j < temp.length; j++) {
            result += temp[j];
        }
    }

    return result;
};

console.log(reverseStr("abcdefg", 2)); // bacdfeg
console.log(reverseStr("abcd", 2)); // bacd
console.log(reverseStr('a', 1)); // a
console.log(reverseStr('ab', 1)); // ab