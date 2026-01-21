/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard.
Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

In the American keyboard:
the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Explanation:
Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

Example 2:
Input: words = ["omk"]
Output: []

Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]

Constraints:
1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase). 
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    // Time Complexity: O(n * m), Space Complexity: O(n)
    const line1 = "qwertyuiop", line2 = "asdfghjkl", line3 = "zxcvbnm";
    const result = [];

    for (let word of words) {
        let flag = true;
        let line = line1;

        if (line2.includes(word[0].toLowerCase())) {
            line = line2;
        }
        if (line3.includes(word[0].toLowerCase())) {
            line = line3;
        }

        for (let i = 1; i < word.length; i++) {
            if (!line.includes(word[i].toLowerCase())) {
                flag = false;
                break;
            }
        }

        if (flag) {
            result.push(word);
        }
    }

    return result;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska","Dad"]
console.log(findWords(["omk"])); // []
console.log(findWords(["adsdf", "sfd"])); // ["adsdf","sfd"]