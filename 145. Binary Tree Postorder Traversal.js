/*

Given a binary tree, return the postorder traversal of its nodes' values.

    Example:

    Input: [1,null,2,3]
    1
        \
        2
        /
    3

    Output: [3,2,1]

Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) return [];

    let acc = [];
    let stack = [root];

    while (stack.length) {
        let node = stack.pop();
        acc.unshift(node.val);

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return acc;
};

{
    let node = new TreeNode("F");
    node.left = new TreeNode("B");
    node.left.left = new TreeNode("A");
    node.left.right = new TreeNode("D");
    node.left.right.left = new TreeNode("C");
    node.left.right.right = new TreeNode("E");
    node.right = new TreeNode("G");
    node.right.right = new TreeNode("I");
    node.right.right.left = new TreeNode("H");
    console.log(postorderTraversal(node));
}