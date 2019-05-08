/*

Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let acc = [];

    let binaryTreePathsRec = (root, tmp) => {
        if (!root) return;

        let newTmp = [...tmp, root.val];
        if (root && !root.left && !root.right) {
            acc.push(newTmp.join("->"));
            return;
        }

        binaryTreePathsRec(root.left, newTmp);
        binaryTreePathsRec(root.right, newTmp);
    }

    binaryTreePathsRec(root, []);

    return acc;
};

{
    let node = new TreeNode(1);
    node.left = new TreeNode(2);
    node.left.right = new TreeNode(5);
    node.right = new TreeNode(3);
    console.log(binaryTreePaths(node));
}