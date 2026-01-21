/*
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger).
You must also not convert the inputs to integers directly.

Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"
 
Constraints:
1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // Time Complexity: O(n), Space Complexity: O(n)
    let result = '';
    let carry = 0;
    const num1Length = num1.length;
    const num2Length = num2.length;
    const loopIterationCount = Math.max(num1Length, num2Length);

    for (let i = 1; i <= loopIterationCount; i++) {
        const a = (num1[num1Length - i] * 1) || 0;
        const b = (num2[num2Length - i] * 1) || 0;
        const sum = carry + a + b;
        if (sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        result = (sum % 10) + result;
    }

    return carry ? carry + result : result;
};

console.log(addStrings("11", "123")); // 134
console.log(addStrings("456", "77")); // 533
console.log(addStrings("0", "0")); // 0
console.log(addStrings("82454", "0")); // 82454
console.log(addStrings("9999", "9999")); // 19998