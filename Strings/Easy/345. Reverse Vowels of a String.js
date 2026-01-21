/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede" 

Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

var reverseVowels = function(s) {
    // Time Complexity - O(n), Space Complexity - O(n)
    let vowels = "aeiouAEIOU";
    let startIndex = 0;
    let endIndex = s.length - 1;
    s = s.split('');

    while (startIndex < endIndex) {
        if (!(vowels.includes(s[startIndex]))) {
            startIndex++;
            continue;
        }
        if (!(vowels.includes(s[endIndex]))) {
            endIndex--;
            continue;
        }

        let temp = s[startIndex];
        s[startIndex] = s[endIndex];
        s[endIndex] = temp;
        startIndex++;
        endIndex--;
    }

    return s.join("");
};