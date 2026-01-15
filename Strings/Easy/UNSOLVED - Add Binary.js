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
    a = a.split("");
    b = b.split("");
    let firstBit = a.pop();
    let secondBit = b.pop();
    let carry = 0;
    let result = '';

    while(firstBit && secondBit) {
        const x = Number(firstBit);
        const y = Number(secondBit);

        result = Number((x && y && carry || (x && !(y || carry)) || (y && !(x || carry)) || (carry && !(x || y)))) + result;
        carry = x && y && carry || x && y || x && carry || y && carry;

        firstBit = a.pop();
        secondBit = b.pop();
    }

    if (!(firstBit || secondBit)) {
        if (carry) {
            return carry + result;
        }
        return result;        
    }

    return addRemainingValues(firstBit || secondBit, firstBit ? a : b, result, carry);
};

function addRemainingValues(bit, arr, res, c) {
    while (c) {
            c = Number(bit) && c;
            res = Number(bit) ? 0 + res : 1 + res;
            bit = arr.pop();
        }

        if (bit) {
            res = bit + res;
        }

        for (let ch of arr) {
            res = ch + res;
        }

        if (c) {
            res = c + res;
        }

        return res;
}

console.log(addBinary("0", "1")); // 100
//console.log(addBinary("1010", "1011")); // 10101