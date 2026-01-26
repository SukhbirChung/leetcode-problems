/*
Given a 32-bit integer num, return a string representing its hexadecimal representation.
For negative integers, two’s complement method is used.
All the letters in the answer string should be lowercase characters, 
and there should not be any leading zeros in the answer except for the zero itself.
Note: You are not allowed to use any built-in library method to directly solve this problem.

Example 1:
Input: num = 26
Output: "1a"

Example 2:
Input: num = -1
Output: "ffffffff"
 
Constraints:
-231 <= num <= 231 - 1
*/

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    const mapping = {
        "10": 'a',
        "11": 'b',
        "12": "c",
        "13": "d",
        "14": "e",
        "15": "f"
    }

    let result = '';
    while (num >= 16) {
        const dividend = Math.floor(num / 16);
        if (dividend > 9) {
            result += mapping[dividend];
        } else {
            result += dividend;
        }

        num = num % 16;
    }
    if (num > 9) {
        result += mapping[num];
    } else {
        result += num;
    }

    return result;
};

console.log(toHex(26)); // "1a"
console.log(toHex(0)); // "0"
console.log(toHex(1)); // "1"
console.log(toHex(9)); // "9"
console.log(toHex(10)); // "a"
console.log(toHex(15)); // "f"
console.log(toHex(100)); // "64"
console.log(toHex(255)); // "ff"
console.log(toHex(1000)); // "3e8"