/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

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
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701
 
Constraints:
1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].
*/

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    // Time Complexity: O(n), Space Complexity: O(1)
    const letterToNumber = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8,
        "I": 9,
        "J": 10,
        "K": 11,
        "L": 12,
        "M": 13,
        "N": 14,
        "O": 15,
        "P": 16,
        "Q": 17,
        "R": 18,
        "S": 19,
        "T": 20,
        "U": 21,
        "V": 22,
        "W": 23,
        "X": 24,
        "Y": 25,
        "Z": 26
    };

    let result = 0;

    for (let i = 0 ; i < columnTitle.length; i++) {
        result += letterToNumber[columnTitle[i]] * (26 ** (columnTitle.length - (i + 1)));
    }

    return result;
};

console.log(titleToNumber("A"));   // 1
console.log(titleToNumber("E"));   // 5
console.log(titleToNumber("Y"));   // 25
console.log(titleToNumber("Z"));   // 26
console.log(titleToNumber("AB"));  // 28
console.log(titleToNumber("AZ"));  // 52
console.log(titleToNumber("BA"));  // 53
console.log(titleToNumber("ZY"));  // 701
console.log(titleToNumber("ZZ"));  // 702
console.log(titleToNumber("AAA")); // 703
console.log(titleToNumber("AAY")); // 727
console.log(titleToNumber("AAZ")); // 728
console.log(titleToNumber("AFK")); // 843