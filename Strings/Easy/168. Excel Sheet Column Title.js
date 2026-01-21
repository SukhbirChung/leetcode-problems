/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 
Example 1:
Input: columnNumber = 1
Output: "A"

Example 2:
Input: columnNumber = 28
Output: "AB"

Example 3:
Input: columnNumber = 701
Output: "ZY"
 
Constraints:
1 <= columnNumber <= 231 - 1 
*/

var convertToTitle = function (columnNumber) {
    // Time Complexity: O(log₍26₎ n), Space Complexity: O(log₍26₎ n)
    const numberToLetter = {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
        8: "H",
        9: "I",
        10: "J",
        11: "K",
        12: "L",
        13: "M",
        14: "N",
        15: "O",
        16: "P",
        17: "Q",
        18: "R",
        19: "S",
        20: "T",
        21: "U",
        22: "V",
        23: "W",
        24: "X",
        25: "Y",
        0: "Z"
    };

    let result = '';

    while (columnNumber > 0) {
        const remainder = columnNumber % 26;
        result = numberToLetter[remainder] + result;
        const dividend = Math.floor(columnNumber / 26);
        if (remainder === 0) {
            columnNumber = dividend - 1;
        } else {
            columnNumber = dividend;
        }        
    }

    return result;
};

console.log(convertToTitle(1)); // A
console.log(convertToTitle(5)); // E
console.log(convertToTitle(25)); // Y
console.log(convertToTitle(26)); // Z
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(52)); // AZ
console.log(convertToTitle(53)); // BA
console.log(convertToTitle(701)); // ZY
console.log(convertToTitle(702)); // ZZ
console.log(convertToTitle(703)); // AAA
console.log(convertToTitle(727)); // AAY
console.log(convertToTitle(728)); // AAZ
console.log(convertToTitle(843)); // AFK