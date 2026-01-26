/*
Given the root of a binary tree, return all root-to-leaf paths in any order.
A leaf is a node with no children.

Example 1:
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:
Input: root = [1]
Output: ["1"]
 
Constraints:
The number of nodes in the tree is in the range [1, 100].
-100 <= Node.val <= 100
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];

    function makePaths(str, n) {
        const leftIdx = 2*n + 1;
        const rightIdx = 2*n + 2;

        if (!(root[leftIdx] || root[rightIdx])) {
            result.push(str);
            return;
        } 
        if (root[leftIdx]) {
            const left = `${str}->${root[leftIdx]}`;
            makePaths(left, leftIdx);
        } else {
            result.push(str);
        }
        if (root[rightIdx]) {
            const right = `${str}->${root[rightIdx]}`;
            makePaths(right, rightIdx);
        } else {
            result.push(str);
        }
    }

    makePaths(root[0].toString(), 0);
    return result;
};

console.log(binaryTreePaths([100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]));
/*[
  '100->19->17->9',
  '100->19->17->15',
  '100->19->12->6',
  '100->19->12->11',
  '100->36->25->13',
  '100->36->25->8',
  '100->36->5->1',
  '100->36->5->4'
]*/
console.log(binaryTreePaths([100, 19, 36, 17, 12, 25, null, 9, 15, 6, 11, 13, 8, 1, 4]));