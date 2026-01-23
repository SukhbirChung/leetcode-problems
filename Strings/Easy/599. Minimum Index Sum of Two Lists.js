/*
Given two arrays of strings list1 and list2, find the common strings with the least index sum.
A common string is a string that appeared in both list1 and list2.
A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] 
then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.

Example 1:
Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only common string is "Shogun".

Example 2:
Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

Example 3:
Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
Output: ["sad","happy"]
Explanation: There are three common strings:
"happy" with index sum = (0 + 1) = 1.
"sad" with index sum = (1 + 0) = 1.
"good" with index sum = (2 + 2) = 4.
The strings with the least index sum are "sad" and "happy".
 
Constraints:
1 <= list1.length, list2.length <= 1000
1 <= list1[i].length, list2[i].length <= 30
list1[i] and list2[i] consist of spaces ' ' and English letters.
All the strings of list1 are unique.
All the strings of list2 are unique.
There is at least a common string between list1 and list2.
*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    // Time Complexity - O(n), Space Complexity - O(n)
    const commonStrings = {};
    const loopIterationCount = Math.max(list1.length, list2.length);
    let least = list1.length + list2.length - 2;
    let result = [];

    for (let i = 0; i < loopIterationCount; i++) {
        if (list1[i]) {
            if (commonStrings[list1[i]] === undefined) {
                commonStrings[list1[i]] = i;
            } else {
                const temp = i + commonStrings[list1[i]];
                if (least > temp) {
                    least = temp;
                    result = [list1[i]];
                } else if (least === temp) {
                    result.push(list1[i]);
                }
            }
        }
        if (list2[i]) {
            if (commonStrings[list2[i]] === undefined) {
                commonStrings[list2[i]] = i;
            } else {
                const temp = i + commonStrings[list2[i]];
                if (least > temp) {
                    least = temp;
                    result = [list2[i]];
                } else if (least === temp) {
                    result.push(list2[i]);
                }
            }
        }
    }

    return result;
};

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"])); // ["Shogun"]
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"])); // ["Shogun"]
console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"])); // ["sad","happy"]
console.log(findRestaurant(["a"], ["a"])); // ["a"]
console.log(findRestaurant(["a", "b"], ["b"])); // ["b"]
console.log(findRestaurant(["a", "b"], ["b", "c"])); // ["b"]
console.log(findRestaurant(["a", "b", "c"], ["a", "b", "c"])); // ["a"]
console.log(findRestaurant(["a", "b", "a"], ["a", "b", "a"])); // ["a"]
console.log(findRestaurant(["d", "b", "c"], ["a", "b", "c"])); // ["b"]
console.log(findRestaurant(["d", "e", "c"], ["a", "b", "c"])); // ["c"]