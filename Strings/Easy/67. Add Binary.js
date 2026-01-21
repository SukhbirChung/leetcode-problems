/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
 
Constraints:
1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

var addBinary = function(a, b) {
    // Time Complexity: O(n), Space Complexity: O(n)
    let result = '';
    let carry = 0;
    const aLength = a.length;
    const bLength = b.length;
    const loopIterationCount = Math.max(aLength, bLength);

    for (let i = 1; i <= loopIterationCount; i++) {
        const firstBit = (a[aLength - i] * 1) || 0;
        const secondBit = (b[bLength - i] * 1) || 0;

        if ((firstBit === 0) && (secondBit === 0) && (carry === 0)) {
            carry = 0;
            result = '0' + result;
        } else if (
            (firstBit === 1) && (secondBit === 0) && (carry === 0) ||
            (firstBit === 0) && (secondBit === 1) && (carry === 0) ||
            (firstBit === 0) && (secondBit === 0) && (carry === 1)
        ) {
                carry = 0;
                result = '1' + result;
        } else if (
            (firstBit === 1) && (secondBit === 1) && (carry === 0) ||
            (firstBit === 1) && (secondBit === 0) && (carry === 1) ||
            (firstBit === 0) && (secondBit === 1) && (carry === 1)
        ) {
            carry = 1;
            result = '0' + result;
        } else {
            carry = 1;
            result = '1' + result;
        }
    }

    return carry ? carry + result : result;
};

console.log(addBinary("11", "1")); // 100
console.log(addBinary("1010", "1011")); // 10101
console.log(addBinary("0", "0")); // 0
console.log(addBinary("000", "111")); // 111
console.log(addBinary("111", "111")); // 1110
console.log(addBinary("0", "1")); // 1